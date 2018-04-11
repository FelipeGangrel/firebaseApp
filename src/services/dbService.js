import { db } from '../firebase/firebaseInit'

const usersCollection = db().then(db => {
  return db.collection('users')
}).catch(err => {
  console.error(err)
})

export default {
  async updateUserProfile (user) {
    try {
      const userProfile = {
        uid: user.uid,
        name: user.name || null,
        email: user.email || null,
        photoUrl: user.photoUrl || null
      }
      const collection = await usersCollection
      await collection.doc(userProfile.uid).set(userProfile)
      return userProfile
    } catch (err) {
      return err
    }
  },
  async getUserProfile (user) {
    try {
      const collection = await usersCollection
      const doc = await collection.doc(user.uid).get()
      if (doc.exists) {
        // retornando perfil
        return doc.data()
      } else {
        // criando perfil e retornando
        const userData = await this.updateUserProfile(user)
        return userData
      }
    } catch (err) {
      return err
    }
  },
  async createToDo (userUid, toDo) {
    try {
      const collection = await usersCollection
      const toDoCollection = await collection.doc(userUid).collection('todos')
      const docRef = await toDoCollection.add(toDo)
      return docRef
    } catch (err) {
      return err
    }
  },
  async getToDos (userUid) {
    const collection = await usersCollection
    const todosCollection = await collection.doc(userUid).collection('todos')
    return todosCollection
  },
  async updateToDo (userUid, toDo) {
    try {
      const todo = {
        completed: toDo.completed,
        title: toDo.title,
        content: toDo.content
      }
      const collection = await usersCollection
      const todosCollection = await collection.doc(userUid).collection('todos')
      await todosCollection.doc(toDo.id).set(todo)
      return todo
    } catch (err) {
      return err
    }
  }
}
