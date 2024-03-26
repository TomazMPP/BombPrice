<template>
  <p class="warning">
This page showcases the heroes available for purchase from the site owner,<br>always offered at competitive prices and ensuring a safe transaction.</p>
    <div class="main">
      <div class="quadradoInfo">
       <img src="https://bcrypt.com.br/_next/image?url=%2Fbhero%2Fcat_icon.png&w=128&q=75" alt="Boneco do BombCrypto" style="width: 75px; padding: 5%;">
       <img src="https://bcrypt.com.br/_next/image?url=%2FHeroSIcon.png&w=16&q=75" alt="Heroi classe S" class="ClasseS">
       <p><strong>ID: </strong>2611376</p>
       <p><strong>Rarity: </strong>100% Perfect Super Legend</p>
       <p><strong>Price: </strong>60 MATIC</p>
       <div class="skills">
        <img src="https://bcrypt.com.br/_next/image?url=%2Fatts%2Fjail_breaker_icon.png&w=48&q=75" alt="Jail Breaker Skill">
<img src="https://bcrypt.com.br/_next/image?url=%2Fatts%2Fsave_battery_icon.png&w=48&q=75" alt="Save Battery Skill">
      <img src="https://bcrypt.com.br/_next/image?url=%2Fatts%2Ffast_charge_icon.png&w=48&q=75" alt="Battery Skill">
<img src="https://bcrypt.com.br/_next/image?url=%2Fatts%2Fpierce_block_icon.png&w=48&q=75" alt="Pierce Block (Explosion) Skill">
      <img src="https://bcrypt.com.br/_next/image?url=%2Fatts%2Fbomb_pass_icon.png&w=48&q=75" alt="Bomb Pass Skill">
      <img src="https://bcrypt.com.br/_next/image?url=%2Fatts%2Fblock_pass_icon.png&w=48&q=75" alt="Block Pass Skill">
    <img src="https://bcrypt.com.br/_next/image?url=%2Fatts%2Fshield_icon.png&w=48&q=75" alt="Shield Skill"></div>
    <a class="buyButton" href="https://opensea.io/assets/matic/0xd8a06936506379dbbe6e2d8ab1d8c96426320854/2611376" target="_blank">BUY NOW! (OPENSEA)</a>
      </div>
      
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped> 
.lendario {
  background-color: #ffc207 !important;
  color: black !important;
}
  .buyButton {
    background-color: rgb(13, 167, 33);
    margin: 20px;
    padding: 10px;
    align-self: center;
    text-align: center;
    color: white;
    border-radius: 10px;
  }
.ClasseS {
  position: relative;
  right: 30px;
}
  .warning {
    background-color: #f9f9f9;
    padding: 0;
    margin: 0;
    color: black;
  }
  .skills {
    margin-top: 9px;
    margin-bottom: 20px;
  }
.imageHero{
  max-width: 78px;
  height: 75px;
  padding: 5%;
}
.main {
    display: grid;
  grid-template-columns: repeat(4, minmax(0, 2fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  gap: 50px;
padding: 50px;
  background-color: #f9f9f9;
  border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    justify-content: center;
}

.quadradoInfo {
  background-color: #ff0759;
  color: rgb(255, 255, 255);
  padding: 15px; 
  border-radius: 10px;
  text-align: left;
  width: 240px;
  height: 320px;
}

.quadradoInfo p {
  margin: 0;
}


@media screen and (max-width: 1200px) {
    .main {
        grid-template-columns: repeat(3, minmax(250px, 1fr)); /* 3 itens por linha */
       
    }
}

@media screen and (max-width: 800px) {
    .main {
        grid-template-columns: repeat(2, minmax(300px, 1fr)); /* 2 itens por linha */
        margin: 0%;
        align-items: center;
        
    }
}

@media screen and (max-width: 600px) {
    .main {
      margin: 0;
        grid-template-columns: repeat(1, minmax(400px, 1fr)); /* 1 item por linha */
    }
}
</style>
