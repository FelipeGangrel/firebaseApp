<template>
  <div class="mb-3 to-do-item raised">
    <div class="check" :class="{'completed': todo.completed}">
      <button class="check" @click="completedToggle"><icon name="check" /></button>
    </div>
    <div class="title">{{ todo.title }}</div>
  </div>
</template>

<script>
import Icon from '@/components/widgets/Icon'
export default {
  name: 'ToDoItem',
  components: {
    Icon
  },
  computed: {
    todo () {
      return this.$store.getters.todos[this.id]
    }
  },
  props: {
    id: {type: String}
  },
  methods: {
    completedToggle () {
      this.todo.completed = !this.todo.completed
      const todo = this.todo
      this.$store.dispatch('updateToDo', todo)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/main.scss';
.to-do-item {
  border: 1px solid gray('200');
  border-radius: 5px;
  display: flex;
  height: 40px;
  box-sizing: border-box;
  align-items: center;
  .check {
    button.check {
      @extend .btn;
      @extend .btn-light;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      color: gray('400');
    }
    &.completed button.check {
      color: $accent;
    }
  }
  .title {
    margin: 0 1em;
  }
}
</style>
