import Vue from 'vue'
import VueRouter from 'vue-router'
import MyClubs from '../views/MyClubs.vue'
import About from '../views/About.vue'
import Browse from '../views/Browse.vue'
import ModelUN from '../views/ModelUN.vue'
import MathTeam from '../views/MathTeam.vue'
import NTHS from '../views/NTHS.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MyClubs',
    component: MyClubs
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/modelun',
    name: 'ModelUN',
    component: ModelUN
  },
  {
    path: '/mathteam',
    name: 'MathTeam',
    component: MathTeam
  },
  {
    path: '/nths',
    name: 'NTHS',
    component: NTHS
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
