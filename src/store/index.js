
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    tasks: []
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  }
});
