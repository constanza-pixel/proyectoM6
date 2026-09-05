<template>
    <div class="detalles-container">
        <h1>Detalles del libro</h1>
        <div v-if="libro && libro.nombre" class="card-detalle">
            <h2>{{ libro.nombre }}</h2>
            <p>Autor: {{ libro.autor }}</p>
            <p>Categoría: {{ libro.categoria }}</p>
            <p v-if="libro.descripcion">Descripción: {{ libro.descripcion }}</p>
            </div>

            <div v-else class="sin-datos">
                <p>No se encontró la información del libro solicitado.</p>
            </div>

            <router-link to="/libros" class="btn-volver">
                Volver al catálogo de libros
            </router-link>
    </div>
    </template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const libro = computed(() => {
  const getLibro = store.getters.obtenerLibroPorId
  const encontrado = typeof getLibro === 'function' && route.params.id
    ? getLibro(route.params.id)
    : null

  if (encontrado) {
    return encontrado
  }

  return {
    nombre: route.query.nombre || 'Desconocido',
    autor: route.query.autor || 'Desconocido',
    categoria: route.query.categoria || 'Desconocido',
    descripcion: route.query.descripcion || 'Sin descripción'
  }
})
</script>

<style scoped>
.detalles-container {
    max-width: 500px;
    margin: 30px auto;
    padding: 24px;
    background-color: whitesmoke;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(233, 30, 99, 0.08);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
    color: #f8548b;
    text-align: center;
}
.card-detalle {
    margin: 20px 0;
    padding: 16px;
    background-color: #fff;
    border: 1px solid pink;
    border-radius: 8px;
}
.btn-volver {
    display: inline-block;
    margin-top: 10px;
    color: #f8548b;
    text-decoration: none;
    font-weight: 600;
}
</style>
