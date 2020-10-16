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
import CalendarMUN from '../views/CalendarMUN.vue'
import AboutMT from '../views/AboutMT.vue'
import ResourcesMT from '../views/ResourcesMT.vue'
import CalendarMT from '../views/CalendarMT.vue'

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
    path: '/modeluncalendar',
    name: 'CalendarMUN',
    component: CalendarMUN
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
    path: '/mathteamcalendar',
    name: 'CalendarMT',
    component: CalendarMT
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
