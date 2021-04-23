<template>
<div class="data-container">
    <Movie v-if="movie" :data="movie"/>
    <Loading :show="isLoading"/>
</div>
</template>

<script>
import Movie from '../components/movie'
import Loading from '../components/loading'
import movieServe from '../services/movieServices'
export default {
    data(){
        return{
            isLoading:false,
            movie:null,
        }
    },
    components:{
        Movie,
        Loading
    },
    mounted(){
        this.isLoading=true;
        const id=this.$route.params.id;
        movieServe.getMovie(id).then(resp=>{
            this.movie=resp.movie;
            this.isLoading=false;
        })
        
    },
    methods:{
        
    }
}
</script>