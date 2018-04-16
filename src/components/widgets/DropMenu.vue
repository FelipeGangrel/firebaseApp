<template>
  <div @click="onActivate" v-click-outside="onDeactivate">
    <span class="activator">
      <slot name="activator"></slot>
      <div class="menu-content" :class="{'open': active}">
        <slot name="menu-content">
        </slot>
      </div>
    </span>
  </div>
</template>

<script>
import ClickOutside from '@/components/directives/ClickOutside'
export default {
  name: 'DropMenu',
  directives: {
    ClickOutside
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    onActivate () {
      this.active = true
    },
    onDeactivate () {
      this.active = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/main.scss';
// @import '~@/scss/_variables.scss';
// @import '~@/scss/_functions.scss';
// @import '~@/scss/_base.scss';
.activator {
  position: relative;
}
.menu-content {
  position: absolute;
  right: 0;
  height: 0;
  width: 0;
  opacity: 0;
  overflow: hidden;
  transition: all .3s ease-in-out;
  &.open {
    height: auto;
    width: auto;
    opacity: 1;
    transition: all .3s ease-in-out;
    @extend .raised;
  }
  > div {
    background-color: gray('100');
    padding: .3em 0;
    display: flex;
    flex-direction: column;
    a, span, div {
      text-overflow: ellipsis;
      white-space: nowrap;
      color: gray('600');
      text-decoration: none;
      cursor: pointer;
      padding: .2em 1em;
      transition: all .1s ease-in-out;
      &:hover {
        background-color: gray('200');
      }
    }
  }
}
</style>
