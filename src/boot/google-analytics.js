import ga from '../store/analytics'

export default ({ router }) => {
  router.afterEach((to, from) => {
    ga.logPage(to.path, to.name, sessionId)
  })
}
