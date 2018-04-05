<template>
  <div>
    <sidebar />
    <navbar />
    <main id="profile" class="with-navbar">
      profile
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/widgets/Navbar'
import Sidebar from '@/components/widgets/Sidebar'
export default {
  name: 'Profile',
  components: {
    Navbar,
    Sidebar
  }
}
</script>
