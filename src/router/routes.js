
const routes = [
  //  { path: '/landing-page', name: 'landing', component: () => import('src/pages/LandingPage.vue'), meta: { auth: false } },
  { path: '/', name: 'landing', component: () => import('pages/Index.vue'), meta: { auth: false } },
  { path: '/registrationPage', name: 'register', component: () => import('pages/Register.vue'), meta: { auth: false } },
  { path: '/test_email', name: 'email', component: () => import('pages/Email.vue'), meta: { auth: false } },
  { path: '/beforeStarting', name: 'infoBeforeStart', component: () => import('pages/InfoBeforeStart.vue'), meta: { auth: false } },
  { path: '/results', name: 'result', component: () => import('pages/Result.vue'), meta: { auth: false } },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
