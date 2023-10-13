
<!-- Login.vue -->
<template>
  <div>
    <h1>Login page</h1>
    <input v-model="username" @keyup.enter="login" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    };
  },
  methods: {
    login() {
      this.$store.commit('setUsername', this.username);
      this.$router.push('/todolist');
    }
  }
};
</script>
