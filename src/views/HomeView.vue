<script>
import Main from '@/components/Main.vue';
import Promotion from '@/components/Promotion.vue';
import Agenda from '@/components/Agenda.vue';
import Podcasts from '@/components/Podcasts.vue';
import 'primevue/resources/themes/lara-dark-amber/theme.css';

export default {
  components: {
    Main,
    Promotion,
    Agenda,
    Podcasts
  }
};
</script>

<template>
  <div class="main-container">
    <div class="header headerImage"></div>
    <Promotion class="promotion-overlay" />
    <Agenda />
    <Podcasts />
  </div>
</template>

<style scoped>
.main-container {
  position: relative;
}
.headerImage {
  width: 100%;
  height: 800px; /* Adjusted height */
  background-image: url(/src/assets/images/headerimage.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}
.promotion-overlay {
  position: absolute;
  top:50%; /* Adjusted positioning */
  left: 0;
  right: 0;
  z-index: 2; /* Higher z-index than header image */
}
</style>
