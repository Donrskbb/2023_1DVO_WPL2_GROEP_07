<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import CookieBanner from '@/components/CookieBanner.vue';
import 'primevue/resources/themes/lara-dark-amber/theme.css';

export default {
components: {
    Header,
    CookieBanner,
    Footer,
  },
};
</script>

<template>
    <Header v-if="$route.meta.showHeaderFooter" />
    <router-view />
    <CookieBanner />
    <Footer v-if="$route.meta.showHeaderFooter" />
</template>

<style scoped>
  @font-face {
    font-family: s_bold;
    src: url('@/assets/fonts/stolzl_bold.otf');
  }
  @font-face {
    font-family: s_book;
    src: url('@/assets/fonts/stolzl_book.otf');
  }
  @font-face {
    font-family: s_light;
    src: url('@/assets/fonts/stolzl_light.otf');
  }
  @font-face {
    font-family: s_medium;
    src: url('@/assets/fonts/stolzl_medium.otf');
  }
  @font-face {
    font-family: s_regular;
    src: url('@/assets/fonts/stolzl_regular.otf');
  }
  @font-face {
    font-family: s_thin;
    src: url('@/assets/fonts/stolzl_thin.otf');
  }
  @font-face {
    font-family: unbounded;
    src: url('@/assets/fonts/Unbounded-VariableFont_wght.ttf');
  }

  * {
  background-color: #202427;
  font-family: s_regular, sans-serif;
  }
</style>
