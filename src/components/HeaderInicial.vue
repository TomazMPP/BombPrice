<template>
    <nav>
      <div class="logo">
        <h1>BombPrice</h1>
      </div>
      <div class="right">
        <a class="home" @click="home">OpenSea</a>
      <a class="donate" @click="doar">Donate</a>
    </div>

      <div class="hamburger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </nav>
</template>


<script>
export default {
  methods: {
    doar() {
      this.$emit('trocarComponente');
    },
    home() {
      this.$emit('trocarComponente');
    }
  }
}
</script>

<style scoped>
nav {
  background-color:#2a3542;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 5px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 1;
}
nav .logo {
  display: flex;
  align-items: center;
}
nav .logo img {
  height: 25px;
  width: auto;
  margin-right: 10px;
}
nav .logo h1 {
  font-size: 1.3rem;
  background: linear-gradient(to right, #c450fa 0%, #0040ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.right {
  display: flex;
  gap: 30px;
}

.donate {
  background-color: rgb(11, 146, 17);
  padding: 5%;
  border-radius: 15px;
  color: white;
}

.home {
  padding: 5%;
}
.hamburger {
  display: none;
  cursor: pointer;
}

.hamburger .line {
  width: 25px;
  height: 1px;
  background-color: #1f1f1f;
  display: block;
  margin: 7px auto;
  transition: all 0.3s ease-in-out;
}

.hamburger-active {
  transition: all 0.3s ease-in-out;
  transition-delay: 0.6s;
  transform: rotate(45deg);
}

.hamburger-active .line:nth-child(2) {
  width: 0px;
}

.hamburger-active .line:nth-child(1),
.hamburger-active .line:nth-child(3) {
  transition-delay: 0.3s;
}

.hamburger-active .line:nth-child(1) {
  transform: translateY(12px);
}

.hamburger-active .line:nth-child(3) {
  transform: translateY(-5px) rotate(90deg);
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

@media screen and (max-width: 790px) {
  .hamburger {
    display: block;
  }
  nav ul {
    display: none;
  }
}

</style>