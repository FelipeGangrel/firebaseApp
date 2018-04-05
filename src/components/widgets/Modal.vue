<template>
  <div class="modal-wrapper animated fadeIn" :class="{'show': show}">
    <div v-if="show" class="modal-area raised animated" :class="effect" v-click-outside="onClose">
      <div v-if="title" class="modal-title">
        <h5>{{ title }}</h5>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from '@/components/directives/ClickOutside'
import { EventBus } from '@/components/eventBus'
export default {
  name: 'Modal',
  directives: {
    ClickOutside
  },
  created () {
    const self = this
    EventBus.$on('openModal', alias => {
      if (alias === self.alias) {
        self.onOpen()
      }
    })
    EventBus.$on('closeModal', alias => {
      if (alias === self.alias) {
        self.onClose()
      }
    })
  },
  data () {
    return {
      show: false
    }
  },
  props: {
    title: {type: String},
    alias: {type: String},
    effect: {type: String, default: 'bounceInDown'}
  },
  methods: {
    onClose () {
      this.show = false
    },
    onOpen () {
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/main.scss';
.modal-wrapper {
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba($dark, .5);
  z-index: 1050;
  &.show {
    display: flex;
  }
  .modal-area {
    max-width: 600px;
    margin: 1em;
    width: 100%;
    background-color: gray('100');
    border-radius: 3px;
    .modal-title {
      h5 { margin-bottom: 0; }
      padding: 1em;
      background-color: $primary;
      color: pick-visible-color($primary, $dark, $light);
    }
  }
}
</style>
