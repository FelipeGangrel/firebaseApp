<template>
  <button :class="classes">
    <icon :name="icon" />
  </button>
</template>

<script>
import Icon from '@/components/widgets/Icon'
export default {
  name: 'FabButton',
  components: {
    Icon
  },
  props: {
    classes: {type: String, default: 'fixed bottom right'},
    icon: {type: String}
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/main.scss';
button {
  width: 56px;
  height: 56px;
  border-radius: 28px;
  @extend .btn;
  @extend .btn-primary;
  @extend .raised;
  z-index: 10;
  position: absolute;
  &.small {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    font-size: .8em;
  }
  &.top { top: -1em }
  &.bottom { bottom: -1em }
  &.left { left: -1em }
  &.right { right: -1em }
  &.fixed {
    position: fixed;
    &.top { top: calc(#{$navbar-height} + 1em) }
    &.bottom { bottom: 1em }
    &.left { left: 1em }
    &.right { right: 1em }
  }
}
</style>
