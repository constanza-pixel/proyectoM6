import { createStore } from 'vuex'

const store = createStore({

  state: {
    usuarioAutenticado: Boolean(localStorage.getItem('usuario_boolist')),
    usuarioActual: JSON.parse(localStorage.getItem('usuario_boolist') || 'null'),
    libros: JSON.parse(localStorage.getItem('libros_booklist') || '[]')
  },

  getters: {
    estaAutenticado: (state) => state.usuarioAutenticado,
    categoriasValidas: () => ['ficcion', 'ciencia', 'cocina', 'historia', 'fantasia', 'romance'],
    librosPorCategoria: (state) => (categoria) => {
      if (!categoria) return state.libros
      return state.libros.filter(
        (libro) => libro.categoria.toLowerCase() === categoria.toLowerCase()
      )
    },
    obtenerLibroPorId: (state) => (id) => {
      return state.libros.find((libro) => String(libro.id) === String(id))
    }
  },

  mutations: {
    setUsuario (state, usuario) {
      state.usuarioActual = usuario
      state.usuarioAutenticado = true
      localStorage.setItem('usuario_booklist', JSON.stringify(usuario))
    },
    cerrarSesion (state) {
      state.usuarioActual = null
      state.usuarioAutenticado = false
      localStorage.removeItem('usuario_booklist')
    },
    agregarLibro (state, nuevoLibro) {
      state.libros.push(nuevoLibro)
      localStorage.setItem('libros_booklist', JSON.stringify(state.libros))
    },
    eliminarLibro (state, id) {
      state.libros = state.libros.filter((libro) => libro.id !== id)
      localStorage.setItem('libros_booklist', JSON.stringify(state.libros))
    }
  },

  actions: {
    autenticarUsuario ({ commit }, usuario) {
      commit('setUsuario', usuario)
    },
    cerrarSesion ({ commit }) {
      commit('cerrarSesion')
    },
    agregarLibro ({ commit }, nuevoLibro) {
      commit('agregarLibro', nuevoLibro)
    },
    eliminarLibro ({ commit }, id) {
      commit('eliminarLibro', id)
    }
  }
})

export default store
