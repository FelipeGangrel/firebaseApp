import firebase from 'firebase'
import {store} from '../store'

const initializeAuth = new Promise(resolve => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      store.dispatch('autoSignIn', user)
    } else {
      store.dispatch('logout')
    }
    console.log('user', store.getters.user)
    console.log('resolving')
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
