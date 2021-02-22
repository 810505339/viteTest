import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@views/login')
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('@views/home/home')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router