<template>
    <div class="nav">
        <router-link to="/" >Home</router-link>
        <router-link to="/add" >Add Restaurant</router-link>
        <a v-on:click="logout" href="#" >Logout</a>
    </div>
</template>

<script>
export default {
    name:'HeaderComp',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'LogIn'})
        }
    }
}</script>
<style>
 
</style>