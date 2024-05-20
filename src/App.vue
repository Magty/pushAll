<script setup lang="ts">
//import useCheckUpdate from './hooks/useVersion';

const version = import.meta.env.VITE_APP_VERSION;
// useCheckUpdate();

document.body.addEventListener('plugin_web_update_notice', (e: any) => {
  const { version, options } = e.detail;
  console.log('🚀 ~ document.body.addEventListener ~ options:', options);
  console.log('🚀 ~ document.body.addEventListener ~ version:', version);

  // write some code, show your custom notification and etc.
  // alert('System update!');
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>版本号：{{ version }}</div>
  <h1><router-link to="/home">Home</router-link></h1>
  <h1><router-link to="/about">About</router-link></h1>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
