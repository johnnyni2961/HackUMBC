import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import LoginComponent from './components/LoginComponent'
import loginpro from './components/loginpro'
import tutor from './components/tutor'
import register from './components/register'
import forgetpassword from './components/forgetpassword'


Vue.use(VueRouter);

// If you add <Name.vue> in component folder, add this below. 
const routes = [
    {
        path:'/',
        name: '/',
        component: Home
    },
    {
        path:'/login',
        name: "login",
        component: LoginComponent
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
        path:'/forgetpassword',
        name: "forgetpassword",
        component: forgetpassword
    }
]

const router = new VueRouter({
    mode: 'history',
    // base: ProcessingInstruction.env.BASE_URL, this seems unnecessary? i can't quite tell
    routes
})

export default router;