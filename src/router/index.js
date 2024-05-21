import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ChatView from '@/views/ChatView.vue'
import RadioView from '@/views/RadioView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { showHeaderFooter: true }
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView,
    meta: { showHeaderFooter: true }
  },
  {
    path: '/radio',
    name: 'Radio',
    component: RadioView,
    meta: { showHeaderFooter: false }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;