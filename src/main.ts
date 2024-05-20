import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupRouter } from './router';

function setupApp() {
  const app = createApp(App);
  setupRouter(app);
  app.mount('#app');
}

setupApp();
