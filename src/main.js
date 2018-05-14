import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.use(Router)

Vue.config.productionTip = false

const Home = () => import('./views/Home.vue')
const P1 = () => import('./views/P1.vue')
const P2 = () => import('./views/P2.vue')

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/p1', component: P1 },
        { path: '/p2', component: P2 },
        { path: '/', component: Home }
    ],
    // this is necessary to trigger relevant code
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
