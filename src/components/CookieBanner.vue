<template>
    <div v-if="!accepted" class="cookie-banner">
      <div class="cookie-content">
        <p>We use cookies to ensure you get the best experience on our website. By continuing, you agree to our <a href="/privacy-policy">Privacy Policy</a>.</p>
        <button @click="acceptCookies">Accept</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        accepted: false
      };
    },
    methods: {
      acceptCookies() {
        this.accepted = true;
        localStorage.setItem('cookiesAccepted', 'true');
      }
    },
    mounted() {
      if (localStorage.getItem('cookiesAccepted')) {
        this.accepted = true;
      }
    }
  };
  </script>
  
  <style scoped>
  .cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    z-index: 999;
    color: #fff;
    padding: 10px 20px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  }
  
  .cookie-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .cookie-content p {
    margin: 0;
  }
  
  .cookie-content a {
    color: #fff;
    text-decoration: underline;
  }
  
  .cookie-content button {
    background-color: #FF6B35;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .cookie-content button:hover {
    background-color: #0f5cc0;
  }
  </style>
  