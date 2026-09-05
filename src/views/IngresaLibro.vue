<template>
  <div class="form-container">
    <h1>Agregar Libro</h1>

    <form @submit.prevent="guardarLibro">
      <div class="field">
        <label>Nombre del libro: </label>
        <input
        v-model="nombre"
        placeholder="Ingrese el nombre del libro"
        required
        @keyup.enter="guardarLibro"
        />
      </div>

      <div class="field">
        <label>Autor: </label>
        <input
        type="text"
        v-model="autor"
        placeholder="Ingrese el autor del libro"
        required
        />
      </div>

      <div class="field">
        <label>Categoría: </label>
        <select v-model="categoria" required>
          <option value="" disabled>Selecciona una categoría</option>
          <option v-for="cat in categorias" :key="cat" :value="cat">
            {{ cat }}
          </option>
        </select>
      </div>

      <div class="field">
        <label>Descripción: </label>
        <textarea
        v-model="descripcion"
        rows="3"
        placeholder="Breve reseña del libro..."
        ></textarea>
      </div>

      <button type="submit" class="btn-submit">
        Agregar
      </button>
  </form>

  <div v-if="nombre || autor" class="preview-box">
    <h3>Previsualización en tiempo real: </h3>
    <p><strong>Título: </strong> {{ nombre || '---' }}</p>
    <p><strong>Autor: </strong> {{ autor || '---' }}</p>
    <p><strong>Categoría: </strong> {{ categoria || '---' }}</p>
  </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const nombre = ref('')
const autor = ref('')
const categoria = ref('')
const descripcion = ref('')

const categorias = computed(() => store.getters.categoriasValidas || ['ficción', 'ciencia', 'cocina', 'historia', 'fantasía', 'romance'])

function guardarLibro () {
  if (!nombre.value.trim() || !categoria.value) return

  const nuevoLibro = {
    id: Date.now(),
    nombre: nombre.value.trim(),
    autor: autor.value.trim(),
    categoria: categoria.value,
    descripcion: descripcion.value.trim()
  }

  store.commit('agregarLibro', nuevoLibro)

  nombre.value = ''
  autor.value = ''
  categoria.value = ''
  descripcion.value = ''

  alert('Libro ingresado con éxito.')

  router.push('/libros')
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 30px auto;
  padding: 28px;
  background-color: white;
  border-radius: 14px;
  box-shadow: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  color: #f8548b;
  text-align: center;
  margin-bottom: 20px;
}
.field {
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
}
label {
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 6px;
  color: gray;
}
input,
select,
textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid gray;
  border-radius: 8px;
  background-color: white;
  color: black;
  font-size: inherit;
  outline: none;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
}
textarea {
  resize: vertical;
  min-height: 70px;
}
input:focus,
select:focus,
textarea:focus {
  border-color: #f8548b;
  background-color: whitesmoke;
  box-shadow: 0 0 0 3px rgba(248, 84, 139, 0.15);
}
btn-submit {
  display: inline-block;
  padding: 10px 28px;
  margin-top: 10px;
  background-color: #f8548b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
btn-submit:hover {
  background-color: #e04378;
}
.preview-box {
  margin-top: 24px;
  padding: 14px;
  background-color: white;
  border-left: 4px solid #f8548b;
  border-radius: 4px;
  text-align: left;
}
.preview-box h3 {
  margin-top: 0;
  font-size: 0.95rem;
  color: #f8548b;
}
.preview-box p {
  margin: 4px 0;
  font-size: 0.88rem;
  text-align: left;
}
</style>
