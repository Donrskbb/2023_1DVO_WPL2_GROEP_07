<script setup>
</script>

<template>
  <div class="main-container">
    <div class="header headerImage"></div>
      <div class="content-wrapper">
        <div class="content-container"></div>
    </div>
  </div>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8 reclame-banner">
    <div class="text-700 text-left">
      <div class="text-blue-600 font-bold mb-3"><i class="pi pi-globe"></i>&nbsp;POWERED BY PXL</div>
      <div class="font-bold text-4xl mb-3">Crooze niet enkel op de website</div>
      <div class="text-1xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
    </div>
    <div class="text-center download-btn">
      <Button label="Apple Store" icon="pi pi-apple" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></Button>
      <Button label="Play Store" icon="pi pi-android" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></Button>
    </div>
    <div class="text-right">
      <img src="/src/assets/images/dab.png" alt="Image" class="dab" />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  position: relative;
}
.headerImage {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 500px;

  background-image: url(/src/assets/images/header.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Masking (if supported) */
  -webkit-mask-image: url(/src/assets/images/mask1.png);
  mask-image: url(/src/assets/images/mask1.png);
  -webkit-mask-size: 100%;
  mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
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
