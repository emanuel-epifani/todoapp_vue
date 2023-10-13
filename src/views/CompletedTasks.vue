
<!-- CompletedTasks.vue -->
<template>
  <div>
    <h1>Completed Tasks</h1>
    <ul>
      <li v-for="task in completedTasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    completedTasks() {
      return this.$store.state.completedTasks;
    }
  }
};
</script>
