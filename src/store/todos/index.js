import dbService from '../../services/dbService'

export default {
  state: {
    todos: [],
    creatingToDo: false
  },
  mutations: {
    creatingTodo (state, payload) {
      state.creatingTodo = payload
    }
  },
  actions: {
    createToDo ({commit, getters}, payload) {
      const toDo = payload
      const userUid = getters.user.uid
      commit('creatingTodo', true)
      dbService.createToDo(userUid, toDo)
        .then(docRef => {
          console.log('docRef', docRef)
          commit('creatingTodo', false)
        }).catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    todos (state) {
      return state.todos
    }
  }
}
