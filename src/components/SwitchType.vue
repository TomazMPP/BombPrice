<template>
  <div class="type">
    <div class="test">
      <button class="butao" :class="{ active: activeElement === 'IconHero' }" @click="toggleActive('IconHero')">
        <img src="../../images/IconHero.png" alt="Pepe Hero Icon" class="typeSwitch">
      </button>
      <button class="butao" :class="{ active: activeElement === 'iconHouse' }" @click="toggleActive('iconHouse')">
        <img src="../../images/iconHouse.png" alt="House Icon" class="typeSwitch casa">
      </button>
      <button class="butao" :class="{ active: activeElement === 'iconCheck' }" @click="toggleActive('iconCheck')">
        <img src="../../images/check.png" alt="House Icon" class="typeSwitch">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeElement: 'IconHero' 
    };
  },
  methods: {
    toggleActive(element) {
  this.activeElement = element;
  let componente;
  switch (element) {
    case 'IconHero':
      componente = 'Bonecos';
      break;
    case 'iconHouse':
      componente = 'Casas';
      break;
    case 'iconCheck':
      componente = 'Check';
      break;
    default:
      componente = 'Bonecos'; // Valor padrão caso nenhum corresponda
  }
  this.$emit('trocarComponente', componente);
}
  }
};
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
  