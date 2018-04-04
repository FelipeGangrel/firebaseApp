import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import GuestGuard from './guest-guard'
const Home = () => import('@/components/pages/Home')
const Profile = () => import('@/components/pages/Profile')
const Register = () => import('@/components/pages/Register')
const Login = () => import('@/components/pages/Login')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: GuestGuard
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      beforeEnter: GuestGuard
    }
  ]
})
