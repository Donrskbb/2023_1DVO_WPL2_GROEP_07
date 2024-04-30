<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-brand">
        <h1>CRUIZE</h1>
      </div>
      <div class="footer-address">
        <p>Adres komt hier 15, 3500 Hasselt</p>
        <p>Email: mail@example.com</p>
        <p>Tel: +32 12 345 678</p>
        <p>BTW: 123456789ABC</p>
      </div>
      <div class="footer-links">
        <h2>PAGINAS</h2>
        <a href="#">Home</a>
        <a href="#">Community</a>
        <a href="#">Events</a>
      </div>
      <div class="footer-social">
        <a href="#" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Twitch">
          <i class="fab fa-twitch"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  // any reactive data or methods would go here
};
</script>

<style scoped>
.footer {
  background-color: #282828;
  color: #ffffff;
  padding: 10px 0; /* Reduced padding for a tighter look */
  font-family: 'Arial', sans-serif;
}

.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center; /* Align items vertically */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px; /* Padding for smaller screens */
}

.footer-brand h1 {
  color: #f66b0e;
  font-size: 1.8rem; /* Adjusted for a tighter look */
}

.footer-address,
.footer-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer-address p,
.footer-links a {
  font-size: 0.8rem; /* Smaller font-size */
  line-height: 1.5; /* Adjust line spacing */
  margin: 2px 0; /* Less space between lines */
}

.footer-links h2 {
  color: #f66b0e;
  font-size: 1rem;
  margin-bottom: 5px; /* Less space above links */
}

.footer-links a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #f66b0e;
}

.footer-social a {
  color: #ffffff;
  margin: 0 5px; /* Less space between icons */
  font-size: 1.2rem; /* Adjust icon size */
}

.footer-social a:hover {
  color: #f66b0e;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .footer-brand, 
  .footer-address, 
  .footer-links, 
  .footer-social {
    margin-bottom: 10px;
  }

  .footer-social {
    display: flex;
    justify-content: center;
  }
}
</style>
