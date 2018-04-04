<template>
  <nav class="navbar fixed-top navbar-dark bg-primary">
    <div class="container">
      <span class="navbar-brand">{{ $route.name }}</span>
      <span class="text-light" v-if="user !== null">{{ user.email }}</span>
      <router-link class="text-light" to="/">Home</router-link>
      <router-link class="text-light" to="/profile">Profile</router-link>
      <span @click="onSignOut"><icon name="sign-out-alt" /></span>
    </div>
  </nav>
</template>

<script>
import Icon from '@/components/widgets/Icon'
export default {
  name: 'Navbar',
  components: { Icon },
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value == null) {
        this.$router.go('/login')
      }
    }
  },
  methods: {
    onSignOut () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
