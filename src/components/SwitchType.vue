<template>
  <div class="type">
    <div class="test">
      <button class="butao" :class="{ active: activeElement === 'iconValidation' }" @click="toggleActive('iconValidation')">
        <img src="https://imagepng.org/wp-content/uploads/2019/12/check-icone-scaled.png" alt="Pepe Hero Icon" class="typeSwitch"> Validation
      </button>
      <button class="butao" :class="{ active: activeElement === 'iconCheck' }" @click="toggleActive('iconCheck')">
        <img src="https://cdn-icons-png.flaticon.com/512/3967/3967122.png" alt="House Icon" class="typeSwitch">
        My listings
      </button>
     <!-- <button class="butao" :class="{ active: activeElement === 'IconHero' }" @click="toggleActive('IconHero')">
        <img src="https://i.imgur.com/j83LEI3.png" alt="Pepe Hero Icon" class="typeSwitch"> Heroes
      </button>
      <button class="butao" :class="{ active: activeElement === 'iconHouse' }" @click="toggleActive('iconHouse')">
        <img src="https://i.imgur.com/sSU7vOJ.png" alt="House Icon" class="typeSwitch casa"> Houses
      </button> -->
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeElement: 'iconValidation' 
    };
  },
  methods: {
    toggleActive(element) {
  this.activeElement = element;
  let componente;
  switch (element) {
    case 'iconValidation':
      componente = 'Validation';
      break;
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
      componente = 'Validation';
  }
  this.$emit('trocarComponente', componente);
}
  }
};
</script>

  
  <style scoped>
  .butao {
    background-color: #4d7eb6;
    padding: 0;
    cursor: pointer;
    border: 2px solid black;
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #EEF4ED;
  }
  
  .active {
    background-color: #13315C;
    color: #EEF4ED;
  }
  .type {
    background-color: #8DA9C4;
    padding: 2%;
    display: flex;
    justify-content: center;
    border: 2px solid black;
    border-bottom: 0px;
  }
  .test {
    display: flex;
    justify-content: center;
    gap: 30px;
    width: fit-content;
    margin-top: 2%;
    flex-wrap: wrap;
    width: 50%;

  }
  
  .typeSwitch {
    width: 70px;
    height: auto;
    border-radius: 10px;
    margin: 0;
  }
  </style>
  