import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from  '@/lib/util'

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  routes
})

const HAS_LOADED = true;

/*路由前置导航守卫 */
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if(to.name !== 'login') {
    if(HAS_LOADED) next()
    else next({ name: 'login' })
  }else{
    if(HAS_LOADED) next({ name: 'Home' })
    else next()
  }
})

export default router
