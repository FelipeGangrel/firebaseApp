import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)

// eslint-disable-next-line
function onlinePersistence () {
  return firebaseApp.firestore()
}

// eslint-disable-next-line
function offlinePersistence () {
  return new Promise((resolve, reject) => {
    firebaseApp.firestore().enablePersistence()
      .then(() => {
        resolve(firebaseApp.firestore())
      }).catch(err => {
        if (err.code === 'failed-precondition') {
          console.error('Firestore ERROR:', 'Multiple tabs open, persistence can only be enabled in one tab at a a time')
        } else if (err.code === 'unimplemented') {
          console.error('Firestore ERROR:', 'The current browser does not support all of the features required to enable persistence')
        }
        reject(err)
      })
  })
}

export const db = async () => {
  try {
    const db = await offlinePersistence()
    return db
  } catch (err) {
    return err
  }
}
