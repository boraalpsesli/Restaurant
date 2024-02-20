<template>
    <Header/>
    <h1>Hello {{name}},Welcome on Home Page</h1>
    <table border="1">
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>  
        <td>Actions</td> 
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.contact }}</td>
    <td>{{ item.address }}</td>
    <td><router-link :to="'/update/'+item.id" class="update-link">Update</router-link> 
    <button class="delete-button" v-on:click="deleteRestaurant(item.id)">Delete</button>
</td>

    
    </tr>
</table>
    
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default{
    name: "HomePage",
    data(){
        return{
            name:'',
            restaurant:[],
        }
    },
    components:{
        Header
    },
    methods:{
      async  deleteRestaurant(id){
            let result=await axios.delete("http://localhost:3000/restaurant/"+id);
            console.warn(result)
            if(result.status==200){
                this.loadData()
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info');
    // Check if user exists before attempting to parse and access its properties
    if(user) {
        this.name = JSON.parse(user).name;
    } else {
        // Redirect if no user data is found
        this.$router.push({name:'SignUp'});
    }
    let result=await axios.get("http://localhost:3000/restaurant")
    console.warn(result)
    this.restaurant=result.data;
        }
    },
    async mounted() {
        this.loadData();
   
}
}</script>
<style>
table {
    width: 100%; /* Make the table width fit the container */
    border-collapse: collapse; /* Collapse borders */
    margin-top: 20px; /* Add some space above the table */
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1); /* Add some shadow for depth */
    background-color: #ffffff; /* Set a background color */
}

td, th {
    text-align: left; /* Align text to the left */
    padding: 12px 15px; /* Add padding to cells */
    border-bottom: 1px solid #ddd; /* Add a bottom border to cells */
}

th {
    background-color: #f4f4f4; /* Light grey background for headers */
    color: #333; /* Dark grey text for headers */
    font-weight: bold; /* Make header text bold */
}

tr:hover {
    background-color: #f5f5f5; /* Add a hover effect for rows */
}

tr:nth-child(even) {
    background-color: #f9f9f9; /* Zebra striping for rows */
}

td {
    height: auto; /* Auto height for cells */
}
.delete-button {
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    background-color: #ff4d4f; /* Red color for deletion */
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;
}

.delete-button:hover {
    background-color: #ff7875; /* Lighter red on hover */
}

/* Style for Update Link */
.update-link {
    display: inline-block; /* Make the router-link behave like a block for padding */
    padding: 6px 12px;
    margin-right: 8px; /* Space between update and delete buttons */
    background-color: #1890ff; /* Blue color for update */
    color: white;
    border-radius: 4px;
    text-decoration: none; /* Remove underline */
    transition: background-color 0.2s;
}

.update-link:hover {
    background-color: #40a9ff; /* Lighter blue on hover */
}

/* Responsive table */
@media screen and (max-width: 600px) {
    table, thead, tbody, th, td, tr {
        display: block;
    }

    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    tr { border: 1px solid #ccc; }

    td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%;
        text-align: right;
    }

    td:before {
        /* Add column headers to each cell */
        position: absolute;
        top: 0;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        text-align: left;
        font-weight: bold;
        content: attr(data-label);
    }
    
}
</style>
