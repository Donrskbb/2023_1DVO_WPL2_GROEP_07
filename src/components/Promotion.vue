<script setup>
</script>

<template>
  <div class="main-container">
    <div class="promo-container">
      <div class="promo-content">
        <h3 class="promo-title">Crooze niet enkel op de website</h3>
        <p class="promo-text">
          Crooze in je broekzak, om je arm, tijdens je reis en <br />
          terwijl je sport of even genieten tijdens het studeren en koken.
        </p>
        <div class="promo-image-container">
          <img src="..\assets\images\applestore.png" class="promo-image" alt="App Store" />
          <img src="..\assets\images\googleplay.png" class="promo-image" alt="Google Play Store" />
        </div>
      </div>
      
      <div class="phone-container">
        <img src="..\assets\images\APP_mockup_1.png" alt="Phone" class="phone-image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  background-color: #ffffff00;
}
.promo-container{
  display: flex;
  padding: 34px 0 34px 228px;
  background: #f0f0f0;
  max-width: 75%;
}
.promo-content {
  flex: 1;
}
.promo-title {
  color: #000;
  font-family: 'Unbounded', sans-serif;
  font-size: 36px;
  font-weight: 700;
}
.promo-text {
  color: #000;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  font-weight: 400;
}
.promo-image-container {
  display: flex;
  gap: 10px;
}
.promo-image {
  width: 200px;
  height: auto;
}
.phone-container {
  position: absolute;
  z-index: 999;
  top: -110%;
  right: 23%;
}
.phone-image {
  position: relative;
  max-width: 400px;
}
@media (max-width: 1425px) {
  .phone-container {
    display: none;
  }
  .promo-container {
    border-radius: 0 8px 8px 0;
  }
}
</style>
