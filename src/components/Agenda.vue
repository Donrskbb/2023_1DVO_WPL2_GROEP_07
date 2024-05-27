<template>
  <div class="section" id="agenda">
    <h3 class="events-title">Agenda</h3>
    <div class="card">
      <Carousel :value="events" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="10000" class="card">
        <template #item="{ data: event }">
            <div class="event-card">
              <div class="card-image">
                <div class="card-date-container">
                  <Tag :value="event.date" :severity="getSeverity(event.inventoryStatus)" class="card-date"/>
                </div>
                <img :src="event.image" :alt="event.name" class="w-full border-round" />
                <div class="card-location"><i class="fa-solid fa-location-dot" style="color: #ff6b34;"> </i>{{ event.location }}</div>
                <div class="card-name">{{ event.name }}</div>
                <div class="card-paragraph">{{ event.paragraph }}</div>
                <Button class="card-btn" :href="event.link">Lees meer <i class="fa-solid fa-right-long" style="color: #ffffff;"></i></Button>
              </div>
            </div>
        </template>
      </Carousel>
    </div>
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
.section {
  background-color: #e3e2b6;
  padding-top: 60px
}
.events-title {
  margin-left: 15%;
  font-size: 50px;
  font-family: s_bold;
  color: #202427;
}
.card {
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  width: 85%;
}

.event-card {
  width: 268px;
  height: 410px;
  border-radius: 8px;
  background: #202427;
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
.card-date {
  display: flex;

  background: #FF6B34;
  font-weight: 400;
  color: white;
  padding: 5px;
}
.card-date-container {
  position: absolute;
  z-index: 2;
  margin: 14px;
  width: 10%;
}
.card-location{
  font-family: s_bold;
  color: #FF6B34;
  margin: 14px;
}
.card-name{
  width: 268px;
  height: auto;
  font-family: s_bold;
  margin: 14px;
}
.card-paragraph {
  width: 227px;
  height: auto;
  margin: 14px;
  font-family: s_regular;
  color: #999999;
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
