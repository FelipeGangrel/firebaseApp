import AuthService from '../services/authService'

export default (to, from, next) => {
  AuthService.authenticated().then(status => {
    if (!status) {
      next()
    } else {
      next('/')
    }
  })
}
