import dbService from '../../services/dbService'

export default {
  state: {
    todos: [],
    creatingToDo: false
  },
  mutations: {
    creatingToDo (state, payload) {
      state.creatingToDo = payload
    },
    setToDos (state, payload) {
      console.log('payload', payload)
      payload.forEach(toDo => {
        state.todos.push(toDo)
      })
    }
  },
  actions: {
    createToDo ({commit, getters}, payload) {
      const toDo = payload
      const userUid = getters.user.uid
      commit('creatingToDo', true)
      dbService.createToDo(userUid, toDo)
        .then(docRef => {
          commit('creatingToDo', false)
        }).catch(err => {
          console.error(err)
        })
    },
    async getToDos ({commit, getters}) {
      try {
        const userUid = getters.user.uid
        const toDos = await dbService.getToDos(userUid)
        commit('setToDos', toDos)
      } catch (err) {
        console.error(err)
      }
    },
    async realtimeGetToDos ({commit, getters}) {
      try {
        const userUid = getters.user.uid
        const todosCollection = await dbService.realtimeGetToDos(userUid)
        todosCollection.onSnapshot(snapshot => {
          let toDos = []
          snapshot.docChanges.forEach(change => {
            const toDo = change.doc.data()
            toDos.push(toDo)
          })
          commit('setToDos', toDos)
        })
      } catch (err) {
        console.error(err)
      }
    }
  },
  getters: {
    todos (state) {
      return state.todos
    }
  }
}
