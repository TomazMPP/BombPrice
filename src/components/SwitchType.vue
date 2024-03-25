<template>
  <div class="type">
    <div class="test">
      <button class="butao" :class="{ active: activeElement === 'Bonecos' }" @click="Bonecos()">
        <img src="../../images/IconHero.png" alt="Pepe Hero Icon" class="typeSwitch">
      </button>
      <button class="butao" :class="{ active: activeElement === 'Casas' }" @click="Casas()">
        <img src="../../images/iconHouse.png" alt="House Icon" class="typeSwitch casa">
      </button>
      <button class="butao" :class="{ active: activeElement === 'Check' }" @click="Check()">
        <img src="../../images/check.png" alt="Check Icon" class="typeSwitch">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Bonecos() {
    this.$emit('trocarComponente', 'Bonecos');
    this.trocarComponente();
  },
  Casas() {
    this.$emit('trocarComponente', 'Casas');
    this.trocarComponente();
  },
  Check() {
    this.$emit('trocarComponente', 'Check');
    this.trocarComponente();
  }
}
}
</script>
  
  <style scoped>
  .butao {
    background-color: #f9f9f9;
    border: none;
    padding: 0;
    cursor: pointer;
    border: 2px solid black;
    padding: 5%;
  }
  
  .active {
    background-color: #b5c6da;
  }
  .type {
    background-color: #f9f9f9;
    padding: 2%;
    display: flex;
    justify-content: center;
  }
  .test {
    display: flex;
    justify-content: center;
    gap: 50px;
    width: fit-content;
    margin-top: 2%;
  }
  
  .typeSwitch {
    width: 70px;
    height: auto;
    border-radius: 10px;
    margin: 0;
  }
  </style>
  