<template>
 <p class="warning">
This page showcases the heroes available for purchase from the site owner,<br>always offered at competitive prices and ensuring a safe transaction.</p>
    <div class="main">
      </div>
      <div class="casa quadradoInfo">
       <img src="https://bcrypt.com.br/_next/image?url=%2Fbhouse%2FTinyHouse.png&w=128&q=75" alt="Boneco do BombCrypto" style="width: 75px; padding: 5%;">  
       <p><strong>ID: </strong>601</p>
       <p><strong>Rarity: </strong>Tiny House</p>
       <p><strong>Price: </strong>39 MATIC</p>
       <div class="skills"><br></div>
    <a class="buyButton" href="https://opensea.io/assets/matic/0x2d5f4ba3e4a2d991bd72edbf78f607c174636618/601" target="_blank">BUY NOW! (OPENSEA)</a>
      </div>
    </div>
  </template>
  <style scoped> 
  .casa {
    background-color: rgb(14, 108, 145) !important;
  }
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
