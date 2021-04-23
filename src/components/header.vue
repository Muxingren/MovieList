<template>
<nav>
    <div class="left">
        <router-link to="/">首页</router-link>
        <router-link to="/movie">电影页</router-link>
    </div>
     <div class="right" v-if="user">
        <span>{{user.loginId}}</span>
        <button @click="loginOut">退出登录</button>
    </div>
    
</nav>
</template>

<script>
export default {
    
    computed:{
        user(){
            return this.$store.state.loginUser.data
        }
    },
    mounted(){
        // let local=JSON.parse(localStorage.getItem('loginUser'));
        // if(local){
        //     this.loginUser.loginId=local.loginId;
        // }
    },
    methods:{
        loginOut(){
            this.$store.dispatch('loginOut');
            this.$router.push('/');
        }
    }
}
</script>