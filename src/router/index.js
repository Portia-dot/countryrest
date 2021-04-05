import Vue from 'vue'
import Router from 'vue-router'
import CountryList from '../views/CountryList.vue'
import Nprogress from 'nprogress'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Country',
    component: CountryList,
  },
  {
    path: '/details/:alpha2Code',
    name: 'CountryShow',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/CountryShow.vue'),
  },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((routeTo, routeFrom, next) => {
  Nprogress.start()
  next()
})
router.afterEach(() => {
  Nprogress.done()
})
export default router
