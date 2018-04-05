import { db } from '../firebase/firebaseInit'

const usersCollection = db.collection('users')

export default {
  updateUserProfile (user) {
    const userProfile = {
      uid: user.uid,
      name: user.name || null,
      email: user.email || null,
      photoUrl: user.photoUrl || null
    }
    return new Promise((resolve, reject) => {
      usersCollection.doc(userProfile.uid).set(userProfile)
        .then(() => {
          resolve(userProfile)
        }).catch(err => {
          reject(err)
        })
    })
  },
  getUserProfile (user) {
    return new Promise((resolve, reject) => {
      const docRef = usersCollection.doc(user.uid)
      docRef.get()
        .then(doc => {
          if (doc.exists) {
            // retorno perfil caso exista
            resolve(doc.data())
          } else {
            // crio perfil e retorno
            this.updateUserProfile(user)
              .then(userData => {
                resolve(userData)
              }).catch(err => {
                console.log(err)
              })
          }
        }).catch(err => {
          reject(err)
        })
    })
  },
  createToDo (userUid, toDo) {
    return new Promise((resolve, reject) => {
      const docRef = usersCollection.doc(userUid).collection('todos')
      docRef.add(toDo)
        .then(docRef => {
          resolve(docRef)
        }).catch(err => {
          reject(err)
        })
    })
  }
}
