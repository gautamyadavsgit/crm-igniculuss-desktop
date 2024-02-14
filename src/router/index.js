import AuthRoutes from './Auth/Index'
import { createWebHistory, createRouter } from "vue-router";  
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    ...AuthRoutes
  ]
})

export default router
