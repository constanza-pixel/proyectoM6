<template>
  <div class="libros-container">
    <h1>Catálogo de Libros</h1>

    <div v-if="libros-container">
      <router-link to="/agregar-libro" class="btn-agregar">
        Agregar libro
      </router-link>
    </div>

    <Libro v-for="l in libros" :key="l.id" :libro="l" :mostrar-eliminar="estaAutenticado" @ver-detalle="verDetalle" @eliminar="eliminar"/>

    <p v-if="!libros || libros.length === 0" class="no-results">
      No hay libros disponibles en el catálogo
    </p>
  </div>
  </template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Libro from './Libro.vue'

const props = defineProps({
  categoria: {
    type: String,
    default: ''
  }
})

const store = useStore()
const router = useRouter()

const estaAutenticado = computed(() => store.getters.estaAutenticado)
const libros = computed(() => store.getters.librosPorCategoria(props.categoria))

function verDetalle (libro) {
  router.push({
    path: `/detalles/${libro.id}`,
    query: {
      nombre: libro.nombre,
      autor: libro.autor,
      categoria: libro.categoria,
      descripcion: libro.descripcion || ''
    }
  })
}

function eliminar (id) {
  if (id) {
    store.commit('eliminarLibro', id)
  }
}
</script>

<style scoped>
.libros-container {
  max-width: 540px;
  margin: 30px auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(248, 84, 139, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}
h1 {
  color: #f8548b;
  margin-bottom: 20px;
}
.admin-actions {
  margin-bottom: 20px;
}
.btn-agregar {
  display: inline-block;
  padding: 10px 18px;
  background-color: #f8548b;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(248, 84, 139, 0.25);
  transition: background-color 0.2s ease-in-out;
}
.btn-agregar:hover {
  background-color: #e04378;
}
.no-results {
  color: gray;
  font-style: italic;
  margin: 24px 0;
}
</style>
