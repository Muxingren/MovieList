<template>
  <div id="app">
    <Header></Header>
    <!-- 路由出口 -->
    <RouterView/>
    
  </div>
</template>

<script>
import './assets/index.css'
import Header from './components/header'
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  components: {
    Header
  },
  mounted(){
    this.$store.dispatch('loginModule/syncLocal');
  },
  
  methods:{
    
    
  }
}
</script>

<style>

</style>
