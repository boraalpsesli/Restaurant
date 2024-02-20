<template>
    <Header/>
    <div class="container">
        <h1>Hello {{name}}, Welcome on Add Restaurant Page</h1>
        <form class="add-restaurant-form">
            <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name"/>
            <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address"/>
            <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact"/>
            <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
        </form>
    </div>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'
export default{
    name: "AddPage",
    components:{
        Header
    },
    data(){
        return{
            name:'',
            restaurant:{
                name:'',
                address:'',
                contact:'',
            }
        }
    },
    methods:{
        async addRestaurant(){
            console.warn(this.restaurant)
            const result=await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status==201){
                this.$router.push({name:'Home'})
            }
            console.warn(result)
        }
    },
    mounted(){
        let user=localStorage.getItem('user-info');
        if(user) {
        this.name = JSON.parse(user).name;
    }
        if(!user){this.$router.push({name:'SignUp'})}
    }
}</script>
<style>
.container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background-color: #fff;
}

.add-restaurant-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.add-restaurant-form input[type="text"] {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
}

.add-restaurant-form button {
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    color: #fff;
    background-color: #007bff;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s ease-in-out;
}

.add-restaurant-form button:hover {
    background-color: #0056b3;
}

h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}
</style>