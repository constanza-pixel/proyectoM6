<template>
  <div class="libro-card">
    <div class="libro-info">
      <span class="titulo">{{ libro.nombre }}</span>
      <span class="categoria-badge">{{ libro.categoria }}</span>
    </div>

    <div class="acciones">
      <button class="btn-detalle" @click="$emit('ver-detalle', libro)">
        Ver Detalle
      </button>

      <button
        v-if="mostrarEliminar"
        class="btn-eliminar"
        @click="$emit('eliminar', libro.id)">
        Eliminar
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  libro: {
    type: Object,
    required: true
  },
  mostrarEliminar: {
    type: Boolean,
    default: false
  }
})

defineEmits(['ver-detalle', 'eliminar'])
</script>

<style scoped>
.libro-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 12px;
  background-color: whitesmoke;
  border: 1px solid pink;
  border-radius: 8px;
}
.libro-info {
  text-align: left;
}
.titulo {
  font-weight: 600;
  color: black;
}
.categoria-badge {
  display: inline-block;
  background-color: whitesmoke;
  color: #c2185b;
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  font-weight: 600;
  text-transform: capitalize;
}
.acciones {
  display: flex;
  gap: 8px;
}
.btn-detalle {
  padding: 6px 12px;
  background-color: white;
  border: 1.5px solid #f8548b;
  color: #f8548b;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-detalle:hover {
  background-color: #f8548b;
  color: white;
}
.btn-eliminar {
  padding: 6px 12px;
  background-color: white;
  border: 1px solid pink;
  color: red;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-eliminar:hover {
  background-color: red;
  color: white;
}
</style>
