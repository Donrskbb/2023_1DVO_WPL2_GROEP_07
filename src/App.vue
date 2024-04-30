<script>

  import Header from '@/components/Header.vue';
  import Main from '@/components/Main.vue';
  import Footer from '@/components/Footer.vue';
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
  <Footer />
</template>

<style scoped>
</style>