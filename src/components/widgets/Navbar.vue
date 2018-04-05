<template>
  <nav id="navbar" class="fixed-top">
    <div class="container-fluid d-flex align-items-center">
      <div class="mr-3">
        <button class="btn btn-primary" @click="onSidebarOpen"><icon name="bars"/></button>
      </div>
      <div class="options">
        <div class="mr-3 d-none d-sm-block" v-if="user">{{ user.email }}</div>
        <drop-menu>
          <button class="btn btn-primary" slot="activator">
            <icon name="ellipsis-v"/>
          </button>
          <div slot="menu-content">
            <router-link to="/">home</router-link>
            <router-link to="/profile">profile</router-link>
            <span @click="onSignOut">logout</span>
          </div>
        </drop-menu>
      </div>
    </div>
  </nav>
</template>

<script>
import Icon from '@/components/widgets/Icon'
import DropMenu from '@/components/widgets/DropMenu'

export default {
  name: 'Navbar',
  components: { Icon, DropMenu },
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
    },
    onSidebarOpen () {
      this.$store.dispatch('sidebarOpen')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/main.scss';
#navbar {
  background-color: $primary;
  color: pick-visible-color($primary, $dark, $light);
  .container-fluid {
    height: $navbar-height;
  }
  .options {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
