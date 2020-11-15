import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import LoginComponent from './components/LoginComponent'


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
    }
]

const router = new VueRouter({
    mode: 'history',
    // base: ProcessingInstruction.env.BASE_URL, this seems unnecessary? i can't quite tell
    routes
})

export default router;