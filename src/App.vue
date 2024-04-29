<script>

  import Header from '@/components/Header.vue';
  import Main from '@/components/Main.vue';
  import AppFooter from '@/components/Footer.vue';
  import 'primevue/resources/themes/lara-dark-amber/theme.css';
  export default {
  components: {
      Header,
      Main,
      Footer,
  }
};
</script>

<template>
  <Header />
  <RouterView />
  <Main />
  <AppFooter />
</template>

<style scoped>
</style>