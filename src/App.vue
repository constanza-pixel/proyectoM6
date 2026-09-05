<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/home" class="nav-link">Inicio</router-link> |
      <router-link to="/libros" class="nav-link">Libros</router-link> |
      <template v-if="estaAutenticado">
        <router-link to="agregar-libro">Agregar Libro</router-link> |
        <button class="btn-logout" @click="salir">Salir</button>
      </template>
      <router-link v-else to="/registrarse" class="nav-link">Registrarse</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const estaAutenticado = computed(() => store.state.usuarioAutenticado)

function salir () {
  store.commit('cerrarSesion')
  router.push('/home')
}
</script>

<style>
#app {
  text-align: center;
  padding: 16px;
  background-color: whitesmoke;
  border-bottom: 1.5px solid pink;
  margin-bottom: 20px;
}

.navbar {
  text-align: center;
  padding: 16px;
  background-color: whitesmoke;
  border-bottom: 1.5px solid pink;
  margin-bottom: 20px;
}

.navbar a {
  text-decoration: none;
  color: #f8548b;
  font-weight: 600;
  padding: 0 8px;
}

.navbar a.router-link-exact-active {
  color: #f8548b;
}

.btn-logout {
  background: none;
  border: 1px solid #f8548b;
  color: white;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  margin-left: 8px;
}

.btn-logout:hover {
  background-color: #f8548b;
  color: white;
}
</style>
