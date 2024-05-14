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
    <div class="headerImage"></div>
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
  top: 0;
  left: 0;
  right: 0;
  height: 500px;

  background-image: url(/assets/images/headerimage.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}
.content-container {
  flex: 1;
  padding: 20px;
  margin-bottom: 500px;
}
.image-stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 20%;
  margin: 50px;
  z-index: 2;
}
.stacked-image {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
}
.surface-section {
  margin-top: 75px;
}
.reclame-banner {
  display: flex;
  justify-content: space-around;

}
.download-btn {
  display: flex;
  flex-direction: column;
}
.dab {
  width: 200px;
  margin: 10px;
}
</style>
