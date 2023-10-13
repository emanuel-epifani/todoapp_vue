
import Vue from 'vue';
import Router from 'vue-router';
import CompletedTasks from '@/views/CompletedTasks.vue';
import Login from '@/views/LoginPage.vue';
import Albo from '@/views/AlboPage.vue';
import TodoList from "@/views/TodoList.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: Login
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/completed',
      name: 'CompletedTasks',
      component: CompletedTasks
    },
    {
      path: '/albo',
      name: 'AlboPage',
      component: Albo
    }
  ]
});
