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
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> 
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
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
}
</style>
