<template>
    <div>
        <button @click='goBack'>返回首页</button>
        <MovieList :movieData="pageMovies"></MovieList>
        <Loading :show="isShow"></Loading>
        <Pager @change="handle" :current="current" :pageSize="pageSize" :total="total"></Pager>
    </div>
</template>

<script>
import Pager from '../components/pager'
import MovieList from '../components/movieList'
import movieServe from '../services/movieServices'
import Loading from '../components/loading'

export default {
    data(){
    return {
      current:1,
      pageSize:6,
      pageMovies:[],
      total:0,
      isShow:false
    }
  },
  components: {
    Pager,
    MovieList,
    Loading
  },
  mounted(){
    this.setMovies();
  },
  
  methods:{
    setMovies(){
       this.isShow = true;
       movieServe.getMoviesData(this.current,this.pageSize).then(resp=>{
          this.total=resp.total;
          this.pageMovies=resp.datas;
          this.isShow = false
        })
    },
    handle(e){
      this.current=e;
      this.setMovies();
    },
    goBack(){
        // 返回首页
        this.$router.push('/');
    }
    
  }
}
</script>