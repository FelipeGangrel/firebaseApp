<template>
  <main id="register" class="d-flex align-items-center">
    <div class="container width-400">
      <div class="d-flex flex-column align-items-center">
        <div class="col-12 text-center mb-3">
          <h4>Crie sua conta</h4>
        </div>
        <div v-if="error" class="col-12">
          <div class="alert alert-warning form-group" role="alert">
          {{ error.message }}
          </div>
        </div>
        <form method="post" @submit.prevent="onSignUp">
          <div class="input-group col-12 mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text"><icon name="envelope" /></div>
            </div>
            <input type="email" name="email" placeholder="usuario@mail.com" v-model="email" class="form-control">
          </div>
          <div class="input-group col-12 mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text"><icon name="lock" /></div>
            </div>
            <input type="password" name="password" placeholder="senha" v-model="password" class="form-control">
          </div>
          <div class="col-12 mb-3">
            <button type="submit" class="btn btn-outline-primary btn-block">Criar</button>
          </div>
          <div class="col-12 text-center">
            <router-link to="/login" class="text-primary">Entrar com uma conta</router-link>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import Icon from '@/components/widgets/Icon'
export default {
  name: 'Register',
  components: { Icon },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.go('/profile')
      }
    }
  },
  methods: {
    onSignUp () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/_functions.scss';
@import '~@/scss/_variables.scss';
#register {
  background-color: gray('300');
  color: pick-visible-color($light, $dark, $light);
  height: 100vh;
  i, svg {
    min-width: 2em;
  }
}
</style>
