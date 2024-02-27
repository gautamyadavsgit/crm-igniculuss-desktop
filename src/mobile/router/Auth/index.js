const routes = [
  {
    path: '/',
    component: () => import('@/mobile/Pages/Login.vue'),
    name: 'mobile.auth.login'
  }
]

export default routes
