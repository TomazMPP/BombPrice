<template>
  <nav>
    <div class="logo">
      <h1>BombPrice</h1>
    </div>
    <div class="right">
      <a class="wallet" @click="goTo('Wallets')"><img class="menuImg" src="https://bcrypt.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwallets.f995be22.png&w=256&q=75" alt="Drawing of a wallet"></a>
      <a class="home" @click="goTo('Bonecos')">OpenSea</a>
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
.menuImg {
  width: 40px;
}
nav {
  background-color:#2F3E46;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 5px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 1;
  overflow:hidden;
}

nav .logo h1 {
  font-size: 1.3rem;
  color: #CAD2C5;
}

.right {
  display: flex;
  gap: 20px;
}

.donate {
  background-color: #52796F;
  padding: 5%;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  margin-right: 30px;
}

.home {
  padding: 5%;
  cursor: pointer;
  color: #CAD2C5;
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

@media screen and (max-width: 790px) {
  h1 {
    display: none;
  }
  
  .right {
    justify-content: center;
  }
  
  nav {
    padding: 0;
    justify-content: center;
    height: 75px;
  }
}


</style>