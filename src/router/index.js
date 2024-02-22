import AuthRoutes from './Auth/Index'
import { createWebHistory, createRouter } from 'vue-router'
import constants from '../constant.js'
let routes = []
console.log(constants[0].mode)
if (constants[0].mode == 'm') {
} else {
  routes = [...AuthRoutes]
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
