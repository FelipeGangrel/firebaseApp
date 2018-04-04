<template>
  <div>
    <navbar />
    <main id="home" class="with-navbar">
      home
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/widgets/Navbar'
export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
