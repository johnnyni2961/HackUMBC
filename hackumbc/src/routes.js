import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import loginpro from './components/loginpro'
import tutor from './components/tutor'
import register from './components/register'
import UserPage from './components/UserPage'

Vue.use(VueRouter);

// If you add <Name.vue> in component folder, add this below. 
const routes = [
    {
        path:'/',
        name: '/',
        component: Home
    },
    {
        path:'/loginpro',
        name: "loginpro",
        component: loginpro
    },
    {
        path:'/tutor',
        name: "tutor",
        component: tutor
    },
    {
        path:'/register',
        name: "register",
        component: register
    },
    {
        path:'/user/@:username',
        name:'user',
        component: UserPage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;