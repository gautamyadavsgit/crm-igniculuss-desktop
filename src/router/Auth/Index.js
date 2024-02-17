const AuthRoutes = [
  {
    path: '/',
    name: 'auth.login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'auth.register',
    component: () => import('@/views/Auth/Register.vue')
  }
]
export default AuthRoutes
