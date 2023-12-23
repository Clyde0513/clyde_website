import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './Home.vue'; // Import your Home component
import About from './About.vue'; // Import your About component

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

// Use the router plugin
app.use(router);

// Mount the app
app.mount('#app');
