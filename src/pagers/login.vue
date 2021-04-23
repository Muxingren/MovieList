<template>
    <div>
        <div class="center">
        <p>
            <label>账号：</label>
            <input type="text" v-model="loginId"/>
        </p>
        <p>
            <label>密码：</label>
            <input type="password" v-model="loginPwd"/>
        </p>
        <p>
            <button @click="handleLogin">登录</button>
        </p>
        </div>
        <Loading :show="isShow"></Loading>
    </div>
</template>

<script>
import Loading from '../components/loading'
import Vuex from 'vuex'

export default {
    data(){
        return{
            loginId:'',
            loginPwd:''
        }
    },
    computed:Vuex.mapState({
        isShow:state=>state.loginUser.isLoading
    }),
    components:{
        Loading
    },
    methods:{
        async handleLogin(){
            let userData={loginId:this.loginId,loginPwd:this.loginPwd};
            const result=await this.$store.dispatch('login',userData);
            if(result){
                this.$router.push('/movie');
            }
            else{
                alert('用户名或密码错误')
            }
           
        }
    }
}
</script>