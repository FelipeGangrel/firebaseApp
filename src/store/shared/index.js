export default {
  state: {
    loading: false,
    error: null,
    sidebarOpen: false
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    sidebarOpen (state) {
      state.sidebarOpen = true
    },
    sidebarClose (state) {
      if (state.sidebarOpen) {
        state.sidebarOpen = false
      }
    }
  },
  actions: {
    clearError ({commit}) {
      commit('clearError')
    },
    sidebarOpen ({commit}) {
      commit('sidebarOpen')
    },
    sidebarClose ({commit}) {
      commit('sidebarClose')
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    sidebarOpen (state) {
      return state.sidebarOpen
    }
  }
}
