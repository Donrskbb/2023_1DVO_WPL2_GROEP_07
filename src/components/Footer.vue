<template>
    <footer class="footer">
      <div class="container">
        <span>&copy; 2024 Mijn Website. Alle rechten voorbehouden.</span>
        <a href="https://www.voorbeeld.com/privacybeleid" target="_blank">Privacybeleid</a>
        <a href="https://www.voorbeeld.com/contact" target="_blank">Contact</a>
      </div>
    </footer>
</template>
  
<script>
  export default {
    name: 'FooterComponent'
  }
</script>
  
<style scoped>
  .footer {
    background-color: #f8f9fa;
    padding: 10px 20px;
    text-align: center;
    font-size: 14px;
    border-top: 1px solid #e7e7e7;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
  