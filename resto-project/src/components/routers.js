import HomePage from './Home.vue'
import SignUp from './SignUp.vue'
import LogIn from './LogIn'
import AddPage from './Add.vue';
import UpdatePage from './Update.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
const routes=[
    {
        name:'Home',
        component:HomePage,
        path:'/'
    },
    {name:'SignUp',
    component:SignUp,
    path:'/sign-up'},
    {name:'LogIn',
    component:LogIn,
    path:'/log-in'},
    {name:'Add',
    component:AddPage,
    path:'/add'},
    {name:'Update',
    component:UpdatePage,
    path:"/update/:id"}

];
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router