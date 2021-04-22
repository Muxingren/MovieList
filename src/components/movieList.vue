<template>
    <div class="data-container">
        <Movie :data="item" v-for="item in movieData" :key="item._id"></Movie>
    </div>
</template>

<script>
import Movie from './movie'

export default {
     props:{
        movieData:{
            type:Array,
            require:true
        }
    },
    components:{
        Movie
    }
}
</script>

