import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import LoginComponent from './components/LoginComponent'
import tutor from './components/tutor'
import register from './components/register'
import subject from './components/subject'
import tutorsignin from './components/tutor-signin'
import tutorsignup from './components/tutor-signup'

Vue.use(VueRouter);

// If you add <Name.vue> in component folder, add this below. 
const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path:'/login',
        name: "login",
        component: LoginComponent
    },
    {    
        path: '/tutor',
        name: "tutor",
        component: tutor
    },
    {
        path: '/register',
        name: "register",
        component: register
    },
    {
        path: '/subject',
        name: "subject",
        component: subject
    },
    {
        path: '/tutor-signin',
        name: "tutorsignin",
        component: tutorsignin
    },
    {
        path: '/tutor-signup',
        name: "tutorsignup",
        component: tutorsignup
    }
]

const router = new VueRouter({
    mode: 'history',
    // base: ProcessingInstruction.env.BASE_URL, this seems unnecessary? i can't quite tell
    routes
})

export default router;