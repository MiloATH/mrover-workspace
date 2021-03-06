import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../components/Menu.vue'
import RATask from '../components/RATask.vue'
import PidTune from '../components/PidTune.vue'
import LCMEcho from '../components/LCMEcho.vue'
import SATask from '../components/SATask.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/RATask',
      name: 'RATask',
      component: RATask
    },
    {
      path: '/PidTune',
      name:'PidTune',
      component: PidTune
    },
    {
      path: '/LCMEcho',
      name: 'LCMEcho',
      component: LCMEcho
    },
    {
      path: '/SATask',
      name: 'SATask',
      component: SATask
    }
  ]
})
