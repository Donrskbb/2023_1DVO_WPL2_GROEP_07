<template>
  <footer class="footer">
    <div class="footer-grid">
      <div class="brand-section">
        <slot name="brand">
          <img src="../assets/images/LogoSizes/LogoCrooze250.png" alt="image" style="width: 200px; height: 30px;">
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
          <a href="#"><img src="../assets/images/LogoSizes/Twitter_white.png" alt="Logo Twitter" style="width:35px;height:35px;"></a>
          <a href="#"><img src="../assets/images/LogoSizes/Facebook_white.png" alt="Logo Facebookl" style="width:35px;height:35px;"></a>
          <a href="#"><img src="../assets/images/LogoSizes/Instagram_white.png" alt="Logo Instagram" style="width:35px;height:35px;"></a>
          <a href="#"><img src="../assets/images/LogoSizes/Linkedin_white.png" alt="Logo Linkedin" style="width:35px;height:35px;"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

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

<style scoped>
.footer {
  background-color: #202427;
  color: white;
  font-family: Arial, sans-serif;
}

a{
  color: #BDBDBD;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}

li{
  padding-bottom: 10px;
}

.footer-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}

.info-section{
  margin-bottom: 35px;
}
.social-icons{
  text-align: left;
}

.brand-section p, .info-section a, .footer-section li {
  margin-top: 7px;
  margin-bottom: 0;
}


h2, h3 {
  margin: 0;
  color: #FF6B35;
}
.ons{
  margin-bottom: 0;
  margin-top:25px;
}

.info{
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
}

input {
  flex-grow: 1;
  padding: 10px;
  background-color: #FFF;
  color: #202427;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-right: -5px;
}
::placeholder{
  color: #202427;
}

button {
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

button:hover {
  background-color: #E6531F;
}

.social-section h3 {
  margin-bottom: 19.92px;
}

.social-icons a {
  color: white;
  margin: 0 10px;
}

@media (max-width: 768px) {
  .footer-grid {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .footer-section {
    align-items: center;
  }

  .info-section {
    align-items: flex-start;
  }
}
</style>