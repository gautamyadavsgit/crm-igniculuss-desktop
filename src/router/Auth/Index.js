const AuthRoutes = [
  {
    path: '/',
    name: 'auth.login',
    component: () => import('@/views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'auth.register',
    component: () => import('@/views/Auth/Register.vue')
  },
  {
    path: '/verify-account',
    name: 'auth.enterotp',
    component: () => import('@/views/Auth/EnterOtp.vue')
  },
  {
    path: '/add-logo',
    name: 'auth.add-company',
    component: () => import('@/views/Auth/AddLogo.vue')
  },
  {
    path: '/welcome',
    name: 'auth.welcome',
    component: () => import('@/views/Auth/WelCome.vue')
  }
]
export default AuthRoutes
