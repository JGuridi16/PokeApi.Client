import apiConfig from '@/core/config/apiConfig'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import pokemonRoutes from "./pokemon.router";
import PageNotFound from '@/views/common/PageNotFound.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  pokemonRoutes,
  {
    path: '*',
    name: 'not-found',
    component: PageNotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
