<!-- App.vue -->
<template>
   <mainCard/>
   <projectCard/>
   <!-- <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      Add more navigation links as needed -->
    <!-- </header>

    <router-view></router-view>
  </div> -->
</template>

<script>
import mainCard from './components/mainCard.vue'
import projectCard from './components/projectCard.vue';

export default {
  name: 'App',
  components: {
    mainCard,
    projectCard
  }
}
</script>

<style >
/* Add global styles for the entire app if needed */
body{
  margin: 0;
}
#app{
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: lightskyblue;
}
</style>

