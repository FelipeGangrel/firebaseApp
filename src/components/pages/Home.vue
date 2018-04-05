<template>
  <div>
    <sidebar />
    <navbar />
    <main id="home" class="with-navbar">
      <div class="container">
      </div>
      <fab-button classes="fixed bottom right btn-accent"><icon name="plus" /></fab-button>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/widgets/Navbar'
import Icon from '@/components/widgets/Icon'
import Sidebar from '@/components/widgets/Sidebar'
import FabButton from '@/components/widgets/FabButton'
export default {
  name: 'Home',
  components: {
    Navbar,
    Icon,
    Sidebar,
    FabButton
  }
}
</script>
