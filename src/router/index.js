import AuthRoutes from './Auth/Index'
import MobileAuthRoutes from '../mobile/router/index.js'
import { createWebHistory, createRouter } from 'vue-router'
import constants from '../constant.js'
import DashBoardRoutes from '@/views/Dashboard/router'
let routes = []
console.log(constants[0].mode)
if (constants[0].mode == 'm') {
  routes = MobileAuthRoutes
} else {
  routes = [
    ...AuthRoutes,
    {
      path: '/',
      redirect: { name: 'dashboard.index' },
      component: () => import('@/views/Dashboard/template.vue'),
      children: [...DashBoardRoutes]
    }
  ]
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
