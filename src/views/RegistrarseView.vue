<template>
    <div class="pagina-registro">
    <div class="registro-container">
        <h1>Registro de Usuario</h1>
        <p>Crea tu cuenta para administrar el catálogo de libros.</p>

        <form @submit.prevent="registrarUsuario">
            <div class="field">
                <label>Nombre de usuario:</label>
                <input
                v-model="nombreUsuario"
                type="text"
                placeholder="Ingresa tu nombre de usuario"
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

            <button type="submit" class="btn-registro">
                Registrarse
            </button>
        </form>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const nombreUsuario = ref('')
const contraseña = ref('')

function registrarUsuario () {
  store.commit('setUsuario', { nombre: nombreUsuario.value })
  alert(`${nombreUsuario.value}! Te has registrado con éxito.`)
  router.push('/home')
}
</script>

<style scoped>
.pagina-registro {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 100px);
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
}
.registro-container {
    width: 100%;
    max-width: 420px;
    padding: 36px 30px;
    background-color: whitesmoke;
    border-radius: 16px;
    box-shadow: 0 12px 30px rgba(248, 84, 139, 0.12);
    border: 1px solid pink;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
}
h1 {
    color: #f8548b;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.8rem;
}
p {
    color: gray;
    font-size: 0.95rem;
    margin-bottom: 24px;
}
.field {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    text-align: left;
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
    border: 1px solid #f8548b;
    border-radius: 8px;
    background-color: whitesmoke;
    color: black;
    font-size: 0.95rem;
    outline: none;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
}
input:focus {
    border-color: #f8548b;
    background-color: white;
    box-shadow: 0 0 3px rgba(248, 84, 139, 0.15);
}
.btn-registro {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    background-color: #f8548b;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(248, 84, 139, 0.25);
    transition: background-color 0.2s;
}
.btn-registro:hover {
    background-color: #e8437d;
}
</style>
