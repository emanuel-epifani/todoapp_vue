
<!-- TodoList.vue -->
<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="newTask" @keyup.enter="addTask" />
    <button @click="addTask">Add Task</button>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input v-model="task.name" @blur="updateTaskName(task.id, task.name)" />
        <button @click="deleteTask(task.id)">Delete</button>
        <button @click="markTaskAsDone(task.id)">Done</button>
        <button @click="unmarkTaskAsDone(task.id)">Undo</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [],
      completedTasks: []
    };
  },
  methods: {
    addTask() {
      const taskId = this.tasks.length + 1;
      this.tasks.push({ id: taskId, name: this.newTask, done: false });
      this.newTask = '';
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    updateTaskName(taskId, newName) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.name = newName;
      }
    },
    markTaskAsDone(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.done = true;
        this.completedTasks.push(task);
      }
    },
    unmarkTaskAsDone(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.done = false;
        this.completedTasks = this.completedTasks.filter(task => task.id !== taskId);
      }
    }
  }
};
</script>
