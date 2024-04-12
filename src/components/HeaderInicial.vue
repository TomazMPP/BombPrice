<template>
  <nav>
    <div class="logo">
      <img class="logoImg" src="https://s2.coinmarketcap.com/static/img/coins/200x200/12252.png" alt="Imagem do token bcoin"><h1 @click="goTo('Check')">BombPrice</h1>
    </div>
    <div class="right">
      <a class="validation" @click="goTo('Validation')"><img class="menuImg" src="https://imagepng.org/wp-content/uploads/2019/12/check-icone-scaled.png" alt="Drawing of a wallet">Validation</a>
      <a class="wallet" @click="goTo('Wallets')"><img class="menuImg" src="https://bcrypt.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwallets.f995be22.png&w=256&q=75" alt="Drawing of a wallet">Wallet</a>
      <a class="home" @click="goTo('Bonecos')"><img class="menuImg" src="https://cdn.worldvectorlogo.com/logos/opensea.svg" alt="Opensea Logo">OpenSea</a>
      <a class="donate" @click="goTo('Donate')">Donate</a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    goTo(componentName) {
      this.$emit('trocarComponente', componentName);
    }
  }
}
</script>
<style scoped>
.logo {
  display: inline-flex;
  gap: 5px;
  align-items: center;
}
.logoImg {
  width: 20px;
  height: 20px;
}
.menuImg {
  width: 20px;

}

.wallet, .validation {
  color: #EEF4ED;
  cursor: pointer;
  padding-top: 5%;
}
nav {
  background-color:#0B2545;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 5px 5%;
  display: flex;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  overflow:hidden;
gap: 210px;
border: 2px solid black;
}

nav .logo h1 {
  font-size: 1.3rem;
  color: #EEF4ED;
}

.right {
  display: flex;
  gap: 20px;
}

.donate {
  background-color: #EEF4ED;
  border-radius: 15px;
color: black;
  cursor: pointer;
  padding: 10px;
  margin: 3% 0%;
  display: flex;
  align-items: center;
  max-height: 100%;

}

.home {
  padding: 5% 0%;
  cursor: pointer;
  color: #EEF4ED;
}

.menubar {
  position: absolute;
  top: 0;
  left: -60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  height: 100vh;
  padding: 20% 0;
  background: rgba(255, 255, 255);
  transition: all 0.5s ease-in;
  z-index: 2;
}
.active {
  left: 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
h1 {
  cursor: pointer;
}

@media screen and (max-width: 900px) {
  nav {
gap: 0px;
  }
}

@media screen and (max-width: 790px) {
  h1, .logoImg {
    display: none;
  }
  
  .right {
    justify-content: center;
  }
  
  nav {
    justify-content: center;
  }
}


</style>