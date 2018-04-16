<template>
  <div>
    <sidebar />
    <navbar />
    <main id="profile" class="with-navbar">
      <section class="account-details">
        <div class="container width-600">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Detalhes da conta</h5>
              <form v-if="user" method="post" @submit.prevent="onSaveUserData">
                <div class="form-group">
                  <label>E-mail</label>
                  <input type="email" class="form-control" v-model="user.email" readonly>
                </div>
                <div class="form-group">
                  <label>Nome</label>
                  <input type="text" class="form-control" v-model="user.name">
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary">Salvar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
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
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    onSaveUserData () {
      this.$store.dispatch('updateUserProfile', this.user)
    }
  }
}
</script>

<style lang="scss" scoped>
#profile {
  .account-details {
    padding: 50px 0;
  }
}
</style>
