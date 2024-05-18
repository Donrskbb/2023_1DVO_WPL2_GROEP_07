<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      email: ''
    };
  },
  methods: {
    subscribe() {
      alert(`Bedankt voor je inschrijving!`);
    }
  }
}
</script>

<template>
  <footer class="footer">
    <div class="footer-grid">
      <div class="brand-section">
        <slot name="brand">
          <img src="../assets/images/LogoCrooze250.png" alt="Logo Crooze" class="footer-logo">
          <p>Straatnaam 69, 420 Poopcity</p>
          <p>Contact@crozemedia.com</p>
          <p>+32 420 69 69 69</p>
          <p>BTW 0000000000</p>
          <p>©CROOZEMEDIA BV</p>
        </slot>
      </div>
      <div class="info-section">
        <h3 class="info">INFO</h3>
        <ul>
          <li><a href="#">Over Crooze</a></li>
          <li><a href="#">Privacybeleid</a></li>
          <li><a href="#">Adverteren</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="newsletter-section">
        <h3>Schrijf je in voor onze nieuwsbrief</h3>
        <form @submit.prevent="subscribe">
          <input type="email" placeholder="Voorbeeld@emailadres.com" v-model="email" required>
          <button type="submit">Inschrijven</button>
        </form>
      </div>
      <div class="social-section">
        <h3 class="ons">Volg Ons</h3>
        <div class="social-icons">
          <a href="#"><img src="../assets/images/LogoSizes/Twitter_white.png" alt="Logo Twitter" class="social-icon"></a>
          <a href="#"><img src="../assets/images/LogoSizes/Facebook_white.png" alt="Logo Facebook" class="social-icon"></a>
          <a href="#"><img src="../assets/images/LogoSizes/Instagram_white.png" alt="Logo Instagram" class="social-icon"></a>
          <a href="#"><img src="../assets/images/LogoSizes/Linkedin_white.png" alt="Logo Linkedin" class="social-icon"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #202427;
  color: white;
  font-family: Arial, sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

.footer a {
  color: #BDBDBD;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer li {
  padding-bottom: 10px;
}

.footer-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 85%;
  margin: 0 auto;
}

.brand-section p,
.info-section a,
.footer li {
  margin-top: 7px;
  margin-bottom: 0;
}

h3 {
  margin: 0;
  color: #FF6B35;
}

.ons {
  margin-bottom: 0;
  margin-top: 25px;
}

.info {
  margin-top: 40px;
  margin-bottom: 10px;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.newsletter-section form {
  display: flex;
  flex-wrap: wrap;
}

.newsletter-section input {
  flex-grow: 1;
  padding: 10px;
  background-color: #FFF;
  color: #202427;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-right: -5px;
}

.newsletter-section ::placeholder {
  color: #202427;
}

.newsletter-section button {
  padding: 10px 20px;
  border: none;
  background-color: #FF6B35;
  color: white;
  font-weight: 1000;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-section button:hover {
  background-color: #E6531F;
}

.social-icons a {
  color: white;
  margin: 0 10px;
}

.footer-logo {
  width: 200px;
  height: auto;
}

.social-icon {
  width: 35px;
  height: 35px;
}

@media (max-width: 768px) {
  .footer-grid {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-grid > div {
    width: 100%;
    margin-bottom: 20px;
  }

  .newsletter-section form {
    flex-direction: column;
  }

  .newsletter-section input {
    margin-right: 0;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .newsletter-section button {
    border-radius: 5px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 10px;
  }

  .footer-grid {
    max-width: 100%;
  }

  .footer-logo {
    width: 150px;
  }

  .social-icon {
    width: 30px;
    height: 30px;
  }
}
</style>
