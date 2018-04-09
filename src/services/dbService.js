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
    try {
      const collection = await usersCollection
      const toDoCollection = await collection.doc(userUid).collection('todos')
      const querySnapshot = await toDoCollection.get()
      let toDos = []
      querySnapshot.forEach(toDo => {
        toDos.push(toDo.data())
      })
      return toDos
    } catch (err) {
      return err
    }
  },
  async realtimeGetToDos (userUid) {
    const collection = await usersCollection
    const todosCollection = await collection.doc(userUid).collection('todos')
    return todosCollection
  }
}
