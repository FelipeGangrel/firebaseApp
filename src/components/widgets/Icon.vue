<template>
  <i v-if="name !== undefined" :class="`fa fa-${name}`"></i>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome'
import pack from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(pack)
export default {
  name: 'Icon',
  props: {
    name: {
      type: String
    }
  }
}
</script>
