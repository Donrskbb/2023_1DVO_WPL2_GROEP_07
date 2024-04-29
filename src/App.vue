<script scoped>

  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import 'primevue/resources/themes/lara-dark-amber/theme.css'
  export default {
  components: {
      Header,
      Main,
  }
};
</script>

<template>
  <Header />
  <RouterView />
  <Main />
</template>

<style scoped>
</style>