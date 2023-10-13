<template>
  <div>
    <router-link to="/todo-list">Todo List</router-link>
    <router-link to="/completed">Completed</router-link>
    <!-- ... -->
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>

<style>
/* Stili globali */
</style>
