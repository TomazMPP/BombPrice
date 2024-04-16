<template>
  <div class="tudo">
 <p class="warning">
This page showcases the heroes available for purchase from the site owner,<br>always offered at competitive prices and ensuring a safe transaction.</p>
    <div class="main">
      
<p>ALL SOLD. COME BACK SOON
  
</p>
    </div>
  </template>
  <style scoped> 
.abilit {
  background-color: rgb(51, 51, 51);
  border-radius: 5px;
  text-align: center;
  color: white;
}
  .greenun {
    text-decoration: underline;
  text-decoration-color: rgb(0, 255, 0);
  text-decoration-thickness: 3px;
  }

  .redun {
    text-decoration: underline;
  text-decoration-color: red;
  text-decoration-thickness: 3px;
  }

  .yelun {
    text-decoration: underline;
  text-decoration-color: rgb(185, 137, 3);
  text-decoration-thickness: 3px;
  }
   .tudo {
    border: 2px solid black;
    border-top: 0px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .casa {
    background-color: #354F52 !important;

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
    background-color: #8DA9C4;
    padding-top: 0px;
    margin: 0;
    color: white;
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
  grid-template-columns: repeat(3, minmax(0, 2fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  gap: 50px;
padding: 50px;
  background-color: #8DA9C4;
  border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    justify-content: center;
}

.quadradoSRaro {
  background-color: #735874 !important;
}
.quadradoRaro {
  background-color: #2c852c !important;

}
.quadradoEpico {
  background-color: #8b2a8f !important;
  color: white !important;

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


@media screen and (max-width: 1040px) {
    .main {
        grid-template-columns: repeat(2, minmax(250px, 1fr)); 
       
    }
}

@media screen and (max-width: 800px) {
    .main {
        grid-template-columns: repeat(2, minmax(250px, 1fr)); 

        align-items: center;
        
    }
}

@media screen and (max-width: 700px) {
    .main {
      margin: 0;
        grid-template-columns: repeat(1, minmax(20px, 1fr)); 
    }
}
</style>