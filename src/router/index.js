import store from '../store'
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LibrosView from '../views/LibrosView.vue'
import Detalles from '../views/Detalles.vue'
import IngresaLibro from '../views/IngresaLibro.vue'
import RegistrarseView from '../views/RegistrarseView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registrarse',
    name: 'registrarse',
    component: RegistrarseView
  },
  {
    path: '/libros',
    name: 'libros',
    component: LibrosView,
    props: true
  },
  {
    path: '/libros/:categoria',
    name: 'libros-categoria',
    component: LibrosView,
    props: true
  },
  {
    path: '/libros/:id',
    alias: ['/detalles/:id', '/detalle/:id'],
    name: 'detalles',
    component: Detalles,
    props: true
  },
  {
    path: '/agregar-libro',
    name: 'ingresar-libro',
    component: IngresaLibro,
    beforeEnter: (to, from, next) => {
      if (store.getters.estaAutenticado) {
        next()
      } else {
        alert('Debes registrarte o iniciar sesión para administrar catálogo.')
        next('/registrarse')
      }
    }
  },
  {
    path: '/404',
    name: 'not-found',
    component: NotFoundView
  },

  {
    path: '/pathMach(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
