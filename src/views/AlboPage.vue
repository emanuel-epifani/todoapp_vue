<!-- Albo.vue -->
<template>
  <div>
    <h1>Albo page</h1>
    <h1>{{ comic.safe_title }}</h1>
    <img :src="comic.img" alt="Comic image" />
    <p>{{ comic.day }}/{{ comic.month }}/{{ comic.year }}</p>
    <p>Number: {{ comic.num }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      comic: {}
    };
  },
  async created() {
    const response = await axios.get('https://xkcd.com/100/info.0.json');
    this.comic = response.data;
  }
};
</script>


