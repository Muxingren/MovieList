<template>
  <div id="app">
    <MovieList :movieData="pageMovies"></MovieList>
    <Pager @change="handle" :current="current" :pageSize="pageSize" :total="total"></Pager>
  </div>
</template>

<script>
import Pager from './components/pager'
import './assets/index.css'
import MovieList from './components/movieList'
import movieServe from './services/movieServices'

export default {
  name: 'App',
  data(){
    return {
      current:1,
      pageSize:6,
      pageMovies:[],
      total:0
    }
  },
  components: {
    Pager,
    MovieList
  },
  mounted(){
    movieServe.getMoviesData(1,2).then(resp=>{
      this.total=resp.total;
      this.pageMovies=resp.datas
    })
  },
  // computed:{
  //   pageMovies(){
  //       return this.allMovies.slice((this.current-1)*this.pageSize,this.current*this.pageSize);
  //   }
  // },
  methods:{
    handle(e){
      this.current=e;
    }
    
  }
}
</script>

<style>

</style>
