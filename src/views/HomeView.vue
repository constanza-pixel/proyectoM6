<template>
  <div class="home">
    <h1>Bienvenido a Booklist</h1>
    <p>La biblioteca digital de libros de Editorial Nova</p>

    <div class="ingresar-container">
      <h2>Ingresar Usuario</h2>
    <form @submit.prevent="ingresarUsuario">
      <div class="field">
        <label>Nombre de usuario:</label>
        <input
        v-model="nombreUsuario"
        required
        />
      </div>

      <div class="field">
        <label>Contraseña:</label>
        <input
        type="password"
        v-model="contraseña"
        placeholder="******"
        required
        />
      </div>

      <button type="submit">Ingresar</button>
    </form>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const nombreUsuario = ref('')
const contraseña = ref('')

function ingresarUsuario () {
  store.commit('setUsuario', { nombre: nombreUsuario.value.trim() })
  alert(`¡Bienvenido ${nombreUsuario.value}!`)
  router.push('/agregar-libro')
}
</script>

<style scoped>
.ingresar-container {
  max-width: 420px;
  margin: 0 auto;
  padding: 36px 30px;
  background-color: whitesmoke;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(248, 84, 139, 0.12);
  border: 1px solid pink;
}
h2 {
  color: #f8548b;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.8rem;
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
input {
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
input:focus {
  border-color: #f8548b;
  background-color: whitesmoke;
  box-shadow: 0 0 0 3px rgba(248, 84, 139, 0.15);
}
button {
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  background-color: #f8548b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
}
button:hover {
  background-color: #c2185b;
}
</style>
