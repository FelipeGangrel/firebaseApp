<template>
  <aside id="navbar" :class="{'open': active}">
    <section class="menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Perfil</router-link></li>
      </ul>
    </section>
    <div class="sidebar-close" @click="onSidebarClose"></div>
  </aside>
</template>

<script>
import ClickOutside from '@/components/directives/ClickOutside'
export default {
  name: 'Sidebar',
  directives: {
    ClickOutside
  },
  computed: {
    active () {
      return this.$store.getters.sidebarOpen
    }
  },
  methods: {
    onSidebarClose () {
      this.$store.dispatch('sidebarClose')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/main.scss';
#navbar {
  position: fixed;
  top: 0;
  left: -200px;
  z-index: 1040;
  background-color: gray('100');
  width: 200px;
  height: 100vh;
  transition: left .3s ease-in-out;
  .menu {
    ul {
      @extend .list-unstyled;
      li a {
        display: block;
        color: $dark;
        text-decoration: none;
        padding: .5em 1em;
        transition: all .3s ease-in-out;
        &:hover {
          background-color: gray('200');
        }
      }
    }
  }
  .sidebar-close {
    display: none;
    margin-left: 200px;
    top: 0;
    position: absolute;
    width: calc(100vw - 200px);
    height: 100%;
  }
  &.open {
    @extend .raised;
    left: 0;
    .sidebar-close {
      display: block;
    }
  }
}
</style>
