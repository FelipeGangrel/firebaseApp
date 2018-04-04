<template>
  <div>
    <navbar />
    <main id="profile" class="with-navbar">
      profile
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/widgets/Navbar'
export default {
  name: 'Profile',
  components: {
    Navbar
  }
}
</script>
