<template>
  <div class="type">
    <div class="test">
      <button class="butao" :class="{ active: activeElement === 'IconHero' }" @click="toggleActive('IconHero')">
        <img src="https://i.imgur.com/j83LEI3.png" alt="Pepe Hero Icon" class="typeSwitch"> Heroes
      </button>
      <button class="butao" :class="{ active: activeElement === 'iconHouse' }" @click="toggleActive('iconHouse')">
        <img src="https://i.imgur.com/sSU7vOJ.png" alt="House Icon" class="typeSwitch casa"> Houses
      </button>
      <button class="butao" :class="{ active: activeElement === 'iconCheck' }" @click="toggleActive('iconCheck')">
        <img src="https://imagepng.org/wp-content/uploads/2019/12/check-icone-scaled.png" alt="House Icon" class="typeSwitch">
        My listings
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
    background-color: #CAD2C5;
    padding: 0;
    cursor: pointer;
    border: 2px solid black;
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2F3E46;
  }
  
  .active {
    background-color: #84A98C;
  }
  .type {
    background-color: #52796F;
    padding: 2%;
    display: flex;
    justify-content: center;
  }
  .test {
    display: flex;
    justify-content: center;
    gap: 30px;
    width: fit-content;
    margin-top: 2%;
    flex-wrap: wrap;
width: 80%;
  }
  
  .typeSwitch {
    width: 70px;
    height: auto;
    border-radius: 10px;
    margin: 0;
  }
  </style>
  