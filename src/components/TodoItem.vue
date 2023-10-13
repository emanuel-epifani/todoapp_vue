
<!-- TodoItem.vue -->
<template>
  <div>
    <input v-if="editing" v-model="tempTaskName" @blur="stopEditing" />
    <span v-else @dblclick="startEditing">{{ task.name }}</span>
    <button @click="toggleCompleted">
      {{ task.completed ? 'Undo' : 'Complete' }}
    </button>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      editing: false,
      tempTaskName: this.task.name,
    };
  },
  methods: {
    startEditing() {
      this.editing = true;
    },
    stopEditing() {
      this.editing = false;
      this.$emit('rename', this.tempTaskName);
    },
    toggleCompleted() {
      this.$emit('toggle');
    },
    deleteTask() {
      this.$emit('delete');
    },
  },
};
</script>

