<template>
  <div class="card">
    <Carousel :value="events" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="10000" class="card">
      <template #item="{ data: event }">
        <div class="">
          <div class="event-card">
            <div class="relative card-image">
              <i class="fa-solid fa-location-dot" style="color: #ff6b34;"></i><img :src="event.image" :alt="event.name" class="w-full border-round" />
              <Tag :value="event.date" :severity="getSeverity(event.inventoryStatus)" class="absolute o" style="left:5px; top: 5px"/>
            </div>
          </div>
          <div class="card-location">{{ event.location }}</div>
          <div class="card-name">{{ event.name }}</div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import EventService from '@/service/EventService';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Tag from 'primevue/tag';

// Fetch events data from EventService
const events = ref([]);
onMounted(async () => {
  events.value = await EventService.getEventsSmall();
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
.card {
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  width: 85%;
}
.event-card {
  width: 268px;
  height: 210px;
  border-radius: 8px;
  background: var(--Blue-Header-footer, #202427);
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
}
.o {
  background: #FF6B34;
  color: white;
}
.card-location{
  font-family: s_bold;
  color: #FF6B34;
}
.card-name{
  font-family: s_bold;
}
</style>
