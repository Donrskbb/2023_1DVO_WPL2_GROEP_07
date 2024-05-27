<template>
  <footer class="footer">
    <div class="footer-grid">
      <div class="brand-section">
        <slot name="brand">
          <img src="../assets/images/LogoCrooze250.png" alt="Logo Crooze" class="footer-logo">
          <p>Straatnaam 01, 3500 Hasselt</p>
          <p>Contact@crozemedia.com</p>
          <p>+32 412 345 678</p>
          <p>BTW 123456789</p>
          <p>©CROOZEMEDIA BV</p>
        </slot>
      </div>
      <div class="info-section">
        <h3 class="info">INFO</h3>
        <ul>
          <li><a href="#">Over Crooze</a></li>
          <li><a href="/privacy-policy.html">Privacybeleid</a></li>
          <li><a href="#">Adverteren</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="newsletter-section">
        <h3>Schrijf je in voor onze nieuwsbrief</h3>
        <form @submit.prevent="subscribe">
          <input type="text" id="name" name="name" placeholder="Jouw naam" v-model="name" required>
          <input type="email" id="email" name="email" placeholder="Voorbeeld@emailadres.com" v-model="email" required>
          <button type="submit">Inschrijven</button>
        </form>
        <div>
          <h2>{{ message }}</h2>
          <div v-if="showEmailContent">
            <p>Click <a :href="emailContent" class="oranje" target="_blank">here</a> to confirm!</p>
          </div>
        </div>
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
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5028.577399861061!2d5.3508603252716345!3d50.93687373734722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1snl!2sbe!4v1716821355334!5m2!1snl!2sbe" 
      class="maps"
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const emailContent = ref('');
const showEmailContent = ref(false);

const subscribe = async () => {
  try {
    const response = await fetch('https://two324-1dvo-wpl2-groep-07-backend.onrender.com/api/subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          "name": name.value,
          "email": email.value,
          "confirmed": false
        }
      ]),
    });
    const data = await response.json();
    message.value = data.message;

    if (data.emailContent) {
      emailContent.value = data.emailContent;
      showEmailContent.value = true;
      alert('Bedankt voor je inschrijving!');
    } else {
      alert('Bedankt voor je inschrijving!');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>

<style scoped>
.maps {
  display: flex;
  margin: 0 auto;

  width: 85%;
  height: 250px;
  border: 0;
}
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

.oranje,
.oranje:hover {
  color: #E6531F;
  font-weight: bold;

}

.notif-email {
  background-color: white;
  padding: 5px;
  color: #202427;
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
