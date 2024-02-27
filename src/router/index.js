import AuthRoutes from './Auth/Index'
import MobileAuthRoutes from '../mobile/router/index.js'
import { createWebHistory, createRouter } from 'vue-router'
import constants from '../constant.js'
let routes = []
console.log(constants[0].mode)
if (constants[0].mode == 'm') {
  routes = MobileAuthRoutes
} else {
  routes = [
    ...AuthRoutes,
    {
      path: '/dashboardMain',
      redirect: { name: 'DashBoard' },
      component: () => import('@/views/Dashboard/template.vue'),
      children: [...DashboardRoutes]
    }
  ]
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
