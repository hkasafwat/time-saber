import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Timer from '../views/Timer.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pomodoro',
    name: 'Pomodoro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pomodoro.vue')
  },
  {
      path: '/timer',
      name: 'Timer',
      component: Timer
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router