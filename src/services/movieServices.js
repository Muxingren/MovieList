// export default {
//     async getMovies(page, pageSize) {
//         const datas = await fetch("https://api.myjson.com/bins/15f8x1").then(resp => resp.json())
//         return {
//             total: datas.length,
//             datas: datas.slice((page - 1) * pageSize, page * pageSize)
//         }
//     }
// }

// 需要返回一个promise对象
import axios from 'axios'
export default{
    getMoviesData(page,pageSize){
        return axios.get('/main.php').then(res=>{
                const datas = res.data[0].data;
                return{
                    total: datas.length,
                    datas: datas.slice((page - 1) * pageSize, page * pageSize)
                }
              }).catch(err=>{
                console.log(err)
              })
        
      },
    getMovie(id){
        return axios.get('/main.php').then(res=>{
                const datas = res.data[0].data;
                return{
                    movie: datas.find(item=> item._id == id)
                }
              }).catch(err=>{
                console.log(err)
              })
        
      },
     getLoginUser(id,pwd){
        return axios.get('/login.php').then((res)=>{
            const user =  res.data[0].data;
            if(user){
              if(id==user.loginId && pwd == user.loginPwd){
                return user
              }
            }
          })
    }
    
}
