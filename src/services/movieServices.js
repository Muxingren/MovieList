// export default {
//     async getMovies(page, pageSize) {
//         const datas = await fetch("https://api.myjson.com/bins/15f8x1").then(resp => resp.json())
//         return {
//             total: datas.length,
//             datas: datas.slice((page - 1) * pageSize, page * pageSize)
//         }
//     }
// }
import axios from 'axios'
export default{
    getMoviesData(page,pageSize){
        axios.get('/main.php').then(res=>{
            const datas = res.data[0].data;
            console.log(datas)
            return{
                total: datas.length,
                datas: datas.slice((page - 1) * pageSize, page * pageSize)
            }
          }).catch(err=>{
            console.log(err)
          })
      }
}
