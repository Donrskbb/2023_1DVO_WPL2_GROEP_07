<template>
    <div class="section">
      <h3 class="podcasts-title">Podcasts</h3>
      <div class="card">
        <Carousel :value="podcasts" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="10000" class="card">
          <template #item="{ data: podcast }">
              <div class="podcast-card">
                <div class="card-image">
                  <img :src="podcast.image" :alt="podcast.name" class="w-full border-round" />
                  <div class="card-location">{{ podcast.location }}</div>
                  <div class="card-name">{{ podcast.name }}</div>
                  <div class="card-paragraph">{{ podcast.paragraph }}</div>
                </div>
              </div>
          </template>
        </Carousel>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import PodcastService from '@/service/PodcastService';
  import Carousel from 'primevue/carousel';
  import Button from 'primevue/button';
  import Tag from 'primevue/tag';
  
  // Fetch events data from EventService
  const podcasts = ref([]);
  onMounted(async () => {
    podcasts.value = await PodcastService.getPodcastSmall();
  });
  
  // Responsive options for the carousel
  const responsiveOptions = ref([
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]);
  
  // Method to get severity based on inventory status
  const getSeverity = (status) => {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return null;
    }
  };
  </script>
  
  <style scoped>
  .section {
    background-color: #2A2F34;
    padding-top: 60px
  }
  .podcasts-title {
    margin-left: 15%;
    font-size: 50px;
    font-family: s_bold;
    color: white;
  }
  .card {
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    width: 85%;
  }
  
  .podcast-card {
    width: 268px;
    height: 410px;
    border-radius: 8px;
    background: #FF6B34;
    flex-shrink: 0;
  }
  .card-image {
    width: 268px;
    height: auto;
    max-height: 100%;
  }
  .card-image img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
   position: relative;
  }
  .card-location{
    font-family: s_bold;
    color: white;
    margin: 14px;
  }
  .card-name{
    width: 268px;
    height: auto;
    font-family: s_bold;
    font-size: 30px;
    margin: 14px;
    color: #2A2F34;
  }
  .card-paragraph {
    width: 227px;
    height: auto;
    margin: 14px;
    font-family: s_regular;
    color: white;
  }
  .card-btn {
    display: inline-flex;
    padding: 4px 11px;
    justify-content: center;
    align-items: center;
    background: #FF6B34;
    border-radius: 6px;
    gap: 2px;
    color: white;
    margin: 14px;
  }
  </style>
  