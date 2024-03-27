<template>
  <div class="main">
    <form class="form" @submit.prevent="fetchData">
      <button type="submit">
        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
          <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
      <input class="input" v-model="wallet" placeholder="Paste your wallet" required="true" type="text">
      <button class="reset" type="reset" @click="resetForm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </form>
    <p v-if="status"><strong>Error!</strong><br>You are probably looking at a BSC network wallet!<br>This website currently only works with the Polygon Network!</p>
    <p v-if="notFoundError">
      <strong>Error!</strong><br>You are probably looking at a BSC network wallet!<br>This website currently only works with the Polygon Network!
    </p>
    <p v-if="rarityData && rarityData.houses.length === 0 && rarityData.heroes.length === 0">
      <strong style="color: red;">Attention!</strong> <br>
This wallet does not have heroes or houses. <br><br>
<strong>Wallet:</strong> {{ wallet }}
    </p>
    <div class="heroisClas" v-if="rarityData">
      <div v-for="hero in rarityData.heroes" :key="hero.id" :class="['quadradoInfo', mapRarityClass(hero.rarity)]">
        <div><strong>ID:</strong> {{ hero.id }}</div>
        <div><strong>Rarity:</strong> {{ mapRarity(hero.rarity) }}</div>
        <div><strong>Level:</strong> {{ hero.level }}</div>
        <div><strong>Battery:</strong> {{ formatBattery(hero.battery) }}</div>
        <div><strong>P: 💥</strong> {{ hero.bombPower }} | <strong>ST: <img src="https://bcrypt.com.br/_next/image?url=%2Fskills%2Fskill5.webp&w=32&q=75" alt="Speed Skill" style="width: 13px;"> </strong> {{ hero.stamina }} | <strong>SP: <img src="https://bcrypt.com.br/_next/image?url=%2Fskills%2Fskill1.webp&w=32&q=75" alt="Speed Skill" style="width: 15px;"></strong> {{ hero.speed }}</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wallet: '',
      rarityData: null,
      status: '',
      notFoundError: false,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(`https://api.bcrypt.com.br/wallet/pol/${this.wallet}`);
        if (response.status === 404) {
          this.notFoundError = true;
          return;
        }
        
        const data = await response.json();
        this.rarityData = data;
        this.notFoundError = false;
        if (data.status) { // Verificando se existe status na resposta
          this.status = data.status; // Atribuindo status ao data
        } else {
          this.status = ''; // Caso não exista status, atribuindo string vazia
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        this.notFoundError = false;
      }
    },
    resetForm() {
      this.wallet = '';
      this.rarityData = null;
      this.status = ''; // Resetando status ao limpar o formulário
    },
    formatBattery(battery) {
      if (battery === 0) {
        return 'No';
      } else if (battery === 0.5) {
        return 'Yes';
      } else {
        return battery;
      }
    },
    mapRarity(rarity) {
      const rarityMap = {
        'C': 'Common',
        'R': 'Rare',
        'SR': 'Super Rare',
        'E': 'Epic',
        'L': 'Legend',
        'SL': 'Super Legend'
      };
      return rarityMap[rarity] || rarity;
    },
    mapRarityClass(rarity) {
      return rarity === 'SL' ? 'quadradoSuperLenda' : rarity === 'L' ? 'quadradoLendario' : rarity === 'E' ? 'quadradoEpico' : rarity === 'R' ? 'quadradoRaro' : '';
    }
  }
};
</script>


<style scoped>

.quadradoRaro {
  background-color: #2c852c !important;

}
.quadradoEpico {
  background-color: #8b2a8f !important;
  color: white !important;

}
.quadradoLendario {
  background-color: rgb(161, 97, 12) !important;
}

.quadradoSuperLenda {
  background-color: #ff0759 !important;
  color: white !important;
}

.quadradoInfo {
  background-color: #b5c6da;
  color: rgb(0, 0, 0);
  padding: 15px; 
  border-radius: 10px;
  text-align: left;
  width: 220px;
}
.heroisClas {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 2fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  gap: 50px;
padding: 50px;
margin-right: 30px;
    justify-content: center;
    width: 1000px;
}
.main {

  background-color: #f9f9f9;
  border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: center;
    color: black;
    flex-direction: column;
}

.form button {
  border: none;
  background: none;
  color: #8b8ba7;
}

.form {
  --timing: 0.3s;
  --width-of-input: 400px;
  --height-of-input: 40px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #2f2ee9;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  padding-inline: 0.8em;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;
  background: var(--input-bg,#fff);
  border: 1px solid black;
  margin: 50px;
}
/* styling of Input */
.input {
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
  color: black;
}
/* styling of animated border */
.form:before {
  content: "";
  position: absolute;
  background: var(--border-color);
  transform: scaleX(0);
  transform-origin: center;
  width: 100%;
  height: var(--border-height);
  left: 0;
  bottom: 0;
  border-radius: 1px;
  transition: transform var(--timing) ease;
}
/* Hover on Input */
.form:focus-within {
  border-radius: var(--after-border-radius);
}

input:focus {
  outline: none;
}
/* here is code of animated border */
.form:focus-within:before {
  transform: scale(1);
}
/* styling of close button */
/* == you can click the close button to remove text == */
.reset {
  border: none;
  background: none;
  opacity: 0;
  visibility: hidden;
}
/* close button shown when typing */
input:not(:placeholder-shown) ~ .reset {
  opacity: 1;
  visibility: visible;
}
/* sizing svg icons */
.form svg {
  width: 17px;
  margin-top: 3px;
}
</style>