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
      payload.forEach(toDo => {
        const toBeUpdated = state.todos.find(elem => {
          if (elem.id === toDo.id) {
            return elem
          }
        })
        if (toBeUpdated !== undefined) {
          const index = state.todos.indexOf(toBeUpdated)
          state.todos[index].completed = toDo.completed
          state.todos[index].title = toDo.title
          state.todos[index].content = toDo.content
        } else {
          state.todos.push(toDo)
        }
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
        const todosCollection = await dbService.getToDos(userUid)
        todosCollection.onSnapshot(snapshot => {
          let toDos = []
          snapshot.docChanges.forEach(change => {
            const data = change.doc.data()
            const toDo = {
              id: change.doc.id,
              completed: data.completed,
              content: data.content,
              title: data.title
            }
            toDos.push(toDo)
          })
          commit('setToDos', toDos)
        })
      } catch (err) {
        console.error(err)
      }
    },
    updateToDo ({commit, getters}, payload) {
      const toDo = payload
      const userUid = getters.user.uid
      dbService.updateToDo(userUid, toDo)
    }
  },
  getters: {
    todos (state) {
      return state.todos
    }
  }
}
