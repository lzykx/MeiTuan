import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/views/login/LoginPage.vue'
import LayoutContain from '@/views/layout/LayoutContain.vue'
import HomePage from '@/views/home/HomePage.vue'
import ManGrowth from '@/views/home/ManGrowth.vue'
import ManConcern from '@/views/home/ManConcern.vue'
import CultureAct from '@/views/home/CultureAct.vue'
import ManCommit from '@/views/home/ManCommit.vue'
import BeiDou from '@/views/beidou/BeiDou.vue'
import SocietyRecruit from '@/views/recruit/SocietyRecruit.vue'
import SchoolRecruit from '@/views/recruit/SchoolRecruit.vue'
import WorkDetail from '@/views/WorkDetail.vue'

import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      component:LoginPage
    },
    {
      path:'/',
      redirect:'home/first',
      component:LayoutContain,
      children:[
        {
          name:'beidou',
          path:'/beidou/plan',
          component:BeiDou
        },
        {
          name:'society',
          path:'/society/recruit',
          component:SocietyRecruit
        },   
        {
          name:'school',
          path:'/school/recruit',
          component:SchoolRecruit
        },

        {
          name:'home',
          path:'/home/first',
          component:HomePage,
        },
        {
          path:'/home/man/growth',
          component:ManGrowth
          },
        {
          path:'/home/man/concern',
          component:ManConcern
        },
        {
          path:'/home/culture/act',
          component:CultureAct
        },          {
          path:'/home/man/commit',
          component:ManCommit
        },
        {
          path:'/work/detail',
          component:WorkDetail
        }
      ]
    },
    {
      name:'not',
      path:'/:pathMatch(.*)*',
      component:NotFound
    },

  ]
})

export default router
