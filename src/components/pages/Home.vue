<template>
  <div>
    <sidebar />
    <navbar />
    <modal alias="newToDo" effect="bounceInUp" title="Novo lembrete">
      <form method="post" @submit.prevent="onSubmitNewToDo">
        <div class="form-group">
          <label>Título</label>
          <input type="text" class="form-control" v-model="newTitle" required>
        </div>
        <div class="form-group">
          <label>Lembre-me de</label>
          <textarea class="form-control" rows="4" v-model="newContent" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Criar</button>
      </form>
    </modal>
    <main id="home" class="with-navbar">
      <section class="todos">
        <div class="container">
          <to-do-item v-for="(todo, index) of todos" v-bind:key="index" :id="index">
          </to-do-item>
        </div>
      </section>
      <fab-button @click.native="onNewToDo" icon="plus" classes="fixed bottom right btn-accent"/>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/widgets/Navbar'
import Icon from '@/components/widgets/Icon'
import Sidebar from '@/components/widgets/Sidebar'
import FabButton from '@/components/widgets/FabButton'
import Modal from '@/components/widgets/Modal'
import ToDoItem from '@/components/widgets/ToDoItem'
import { EventBus } from '@/components/eventBus'
export default {
  name: 'Home',
  components: {
    Navbar,
    Icon,
    Sidebar,
    FabButton,
    Modal,
    ToDoItem
  },
  data () {
    return {
      newTitle: '',
      newContent: ''
    }
  },
  computed: {
    todos () {
      return this.$store.getters.todos
    }
  },
  methods: {
    onNewToDo () {
      EventBus.$emit('openModal', 'newToDo')
    },
    onSubmitNewToDo () {
      if (this.newTitle.length && this.newContent.length) {
        const newToDo = {title: this.newTitle, content: this.newContent, completed: false}
        this.$store.dispatch('createToDo', newToDo)
        EventBus.$emit('closeModal', 'newToDo')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  .todos {
    padding: 50px 0;
  }
}
</style>
