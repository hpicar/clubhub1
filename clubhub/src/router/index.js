import Vue from 'vue'
import VueRouter from 'vue-router'
import MyClubs from '../views/MyClubs.vue'
import Browse from '../views/Browse.vue'
import Calendar from '../views/Calendar.vue'
import ModelUN from '../views/ModelUN.vue'
import MathTeam from '../views/MathTeam.vue'
import NTHS from '../views/NTHS.vue'
import InProgress from '../views/InProgress.vue'
import AboutMUN from '../views/AboutMUN.vue'
import ResourcesMUN from '../views/ResourcesMUN.vue'
import AboutMT from '../views/AboutMT.vue'
import ResourcesMT from '../views/ResourcesMT.vue'
import MyAccount from '../views/MyAccount.vue'
import AboutCouncil from '../views/AboutCouncil.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MyClubs',
    component: MyClubs
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
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
  },
  {
    path: '/inprogress',
    name: 'InProgress',
    component: InProgress
  },
  {
    path: '/modelunabout',
    name: 'AboutMUN',
    component: AboutMUN
  },
  {
    path: '/modelunresources',
    name: 'ResourcesMUN',
    component: ResourcesMUN
  },
  {
    path: '/mathteamabout',
    name: 'AboutMT',
    component: AboutMT
  },
  {
    path: '/mathteamresources',
    name: 'ResourcesMT',
    component: ResourcesMT
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/councilabout',
    name: 'AboutCouncil',
    component: AboutCouncil
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
