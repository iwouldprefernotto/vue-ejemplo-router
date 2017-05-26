import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import PrimeraRuta from '@/components/PrimeraRuta'
import PrimeraRutaAnidada from '@/components/PrimeraRutaAnidada'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/firstroute/:name',
      name: 'PrimeraRuta',
      component: PrimeraRuta,
      children: [
        {
          path: 'child',
          component: PrimeraRutaAnidada
        }
      ]
    }
  ]
})
