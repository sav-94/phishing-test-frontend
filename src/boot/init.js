import { boot } from 'quasar/wrappers'
import { api } from 'boot/axios'

export default boot(async ({ router, store }) => {
  // delete api.defaults.headers.common['Authorization'];
  // localStorage.removeItem('access_token');
  // localStorage.removeItem('refresh_token');
  //  await store.dispatch('auth/init')
  // Set the axios defaults
  if (localStorage.getItem('access_token')){
    api.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
  }

  //  To protect the route
  router.beforeEach((to, _, next) => {
    const requiresAuth = to.meta.auth
    const loggedIn = store.getters['auth/isLoggedIn']
    //if (requiresAuth && !loggedIn) next({ name: 'landing' })
    //else if (!requiresAuth && loggedIn) next({ name: 'email' })
    //else next()
    next()
  })


})
