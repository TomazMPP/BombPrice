<script>
export default {
  methods: {
    copiar(address) {
      const textarea = document.createElement('textarea');
      textarea.value = address;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }
}
</script>

<template>
    
    <div class="main">
    <h1>Support Our Mission</h1>
    <div class="texto">
      <p>Your generosity keeps us going! BombPrice is dedicated to providing you with insightful and interactive experiences exploring the blockchain world of BombCrypto. Every donation helps us maintain and enhance our platform, ensuring that we can continue to offer valuable content and innovative features.</p>
      <p>We help you find the best deals for your heroes, you help us find the best conditions for the development of this project.</p>
      <p class="end">Our address: <button class="buttonAddress" @click="copiar('0x6e3B792FBc13F2771BcbcB1315BEB9e897228007')">0x6e3B792FBc13F2771BcbcB1315BEB9e897228007 <img src="../../images/copy.png" class="copy"></button></p>
      <p>Most of the features on our website use the API from https://bcrypt.com.br/, and we are deeply inspired by their work, so please consider also donating to them.</p>
      <p class="end">Their address: <button class="buttonAddress" @click="copiar('0x6e9472D9647D6B705470580cF313a767b1367316')">0x6e9472D9647D6B705470580cF313a767b1367316 <img src="../../images/copy.png" class="copy"></button></p>
      <p>Thank you for considering donating to BombPrice and bcrypt.<br><strong>BombCrypto to the Moon 🚀</strong></p>
    </div>
  </div>
</template>

<style scoped>

.main {
    color: black;
  background-color: #8DA9C4;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 5%;
}

.texto {
    text-align: left;
    display: flex;
    justify-content: right;
    flex-direction: column;
}

.end {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
}

.buttonAddress {
   margin: 10px;
}

.copy {
    width: 12px;
}

@media only screen and (max-width: 768px) {
 .main {
   
    flex-direction: column;
    gap: 20px;
 }

 .texto {
    justify-content: center;
 }

 body {
    max-width: 100%;
    align-items: center;

 }

 .buttonAddress {
    max-width: 200px;
    overflow: hidden;
 }
}

</style>
<script>
</script>