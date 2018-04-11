import firebase from 'firebase'
import dbService from './dbService'
import {store} from '../store'

const initializeAuth = new Promise(resolve => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dbService.getUserProfile(user)
        .then(userData => {
          store.dispatch('autoSignIn', userData)
          store.dispatch('getToDos')
        }).catch(err => {
          console.log(err)
        })
    } else {
      store.dispatch('logout')
    }
    resolve(user)
  })
})

export default {
  authenticated () {
    return initializeAuth.then(user => {
      const isAuthenticated = user !== null && !user.isAnonymous
      return isAuthenticated
    })
  }
}
