const AuthRoutes = [
  {
    path: '/',
    name: 'auth.login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Auth/Login.vue')
  }
]
export default AuthRoutes
