<template>
  <div id="app">
    <MovieList :movieData="pageMovies"></MovieList>
    <Pager
      @change="handle"
      :current="current"
      :pageSize="pageSize"
      :total="total"
    ></Pager>
  </div>
</template>

<script>
import Pager from "./components/pager";
import "./assets/index.css";
import MovieList from "./components/movieList";
import { getMoviesData } from "@/apis/main";
export default {
  name: "App",
  data() {
    return {
      current: 1,
      pageSize: 6,
      pageMovies: [],
      total: 0,
    };
  },
  components: {
    Pager,
    MovieList,
  },
  mounted() {
    getMoviesData({ page: 1, limit: 10 }).then(({data}) => {
      console.log(data);
      this.total = data.total;
      this.pageMovies = data.datas;
    });
  },
  // computed:{
  //   pageMovies(){
  //       return this.allMovies.slice((this.current-1)*this.pageSize,this.current*this.pageSize);
  //   }
  // },
  methods: {
    handle(e) {
      this.current = e;
    },
  },
};
</script>

<style></style>
