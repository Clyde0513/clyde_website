<!-- App.vue -->
<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <!-- Add more navigation links as needed -->
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Add global styles for the entire app if needed */

template {
  font-family: 'Times New Roman';
  margin: 20px;
}

a {
  list-style-type: none; /* Remove bullets from the list */
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-top: 25px;
  float: left; /* Float the list items horizontally */
  margin-left: 60px; /* Add margin to create space between menu items */
  color: white; /* Text color of the menu items */
  text-decoration: none; /* Remove underlines from links */
  font-weight: bold; /* Optionally make the text bold */
  font-size: 18px; /* Set the font size of the menu items */
  color: darkcyan; /* Change text color on hover */
}
</style>

