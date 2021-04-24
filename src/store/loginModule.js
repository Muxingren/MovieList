import loginService from '../services/movieServices.js'

export default {
    namespaced:true,
    // 开启命名空间
    state: { // 仓库
        loginUser:{
            data:null,//当前登录用户为空
            isLoading:false
        }
      },
      // 仓库状态改变的唯一原因 不能处理副作用操作
      mutations: {
        setIsLoading(state,payload){
          state.loginUser.isLoading=payload
        },
        setUser(state,userObj){
          state.loginUser.data=userObj;
        }
      },
      // 处理异步操作
      actions:{
        login(context,payload){
          context.commit('setIsLoading',true);
          loginService.getLoginUser(payload.loginId,payload.loginPwd).then((resp)=>{
              if(resp){
                context.commit('setUser',payload);
                localStorage.setItem('loginUser',JSON.stringify(resp));
              }
          context.commit('setIsLoading',false);
              
          })
        },
        // 退出登录
        loginOut(context){
          context.commit('setUser',null);
          localStorage.removeItem('loginUser');
        },
        // 同步本地存储
        syncLocal(context){
          const local = localStorage.getItem('loginUser');
          if(local){
            const user=JSON.parse(local);
            context.commit('setUser',user);
          }
        }
      }
}