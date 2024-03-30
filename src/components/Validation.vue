<template>
    <div class="main">
        <p class="warning">Please paste the OpenSea link to verify the authenticity of the NFT. <br>
        </p>
        <p class="warningHint"><strong>* Warning:</strong> Currently, this only works if you paste the specific NFT link,<br>in the future I will add the possibility of pasting the link to a collection.</p>
  
        <form class="form" @submit.prevent="verificarNFT">
            <button type="submit">
                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
            <input class="input" placeholder="Paste Opensea Link" required="true" type="text" v-model="openSeaLink">
            <button class="reset" type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </form>
      
        <p v-if="validNFT && inputProvided">
            <strong style="color: green;">Good News!</strong><br>The provided OpenSea link is valid<br>and <strong>corresponds to the official collection.</strong></p>
        <p v-if="openSeaLink !== '' && !validNFT && inputProvided">
            <strong style="color: red;">Bad News!</strong><br>
            The provided OpenSea link is either invalid<br>
            or <strong>NOT OFFICIAL. BEWARE OF SCAMMERS.</strong><br>
            Official link to NFT: <a :href="montarLinkCorreto(linkCorreto)">OpenSea</a><br>
            
        </p>

        <div class="mainInfo">
            <div v-if="nftData !== null" :class="['quadradoInfo', mapRarityClass(nftData.rarity)]">
    <div v-if="nftData.image"><img :src="nftData.image" class="imgThing" :alt="nftData.rarity === 'House' ? 'House Image' : 'Hero Image'"></div>
    <div><strong>ID:</strong> {{ nftData.ID }}</div>
    <div><strong>Rarity:</strong> {{ nftData.rarity }}</div>
    <template v-if="nftData && ['Tiny House', 'Mini House', 'Lux House', 'Pen House', 'Villa', 'Super Villa'].includes(nftData.rarity)">
        <div><strong>Charge:</strong> {{ nftData.charge }}</div>
        <div><strong>Capacity:</strong> {{ nftData.capacity }}</div>
    </template>
    <template v-else>
        <div><strong>Level:</strong> {{ nftData.level }}</div>
        <div><strong>P: 💥</strong> {{ nftData.bombPower }} | <strong>ST: <img src="https://bcrypt.com.br/_next/image?url=%2Fskills%2Fskill5.webp&w=32&q=75" alt="Speed Skill" style="width: 13px;"> </strong> {{ nftData.stamina }} | <strong>SP: <img src="https://bcrypt.com.br/_next/image?url=%2Fskills%2Fskill1.webp&w=32&q=75" alt="Speed Skill" style="width: 15px;"></strong> {{ nftData.speed }}</div>
        <div class="abilities">
    <div v-for="ability in nftData.abilities" :key="ability.name">
        <img :src="ability.icon" :alt="ability.name">
    </div>
</div>
      </template>
</div>

<div v-else-if="validNFT && inputProvided">Fetching NFT data...</div>
</div>
        <p>Feature suggested by <strong>kardongbalasubas</strong> on the <a href="https://discord.com/invite/bombcryptoofficial" target="_blank">Official Discord.</a></p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      openSeaLink: '',
      validNFT: false,
      inputProvided: false,
      linkCorreto: '',
      nftData: null
    };
  },
  methods: {
    mapAbilityIcon(ability) {
    return `https://bcrypt.com.br/_next/image?url=%2Fatts%2F${ability}_icon.png&w=48&q=75`;
  },
    verificarNFT() {
        this.inputProvided = true;
        const regex = /^https:\/\/opensea\.io\/assets\/matic\/(0xd8a06936506379dbBe6e2d8aB1D8C96426320854|0x2d5f4ba3e4a2d991bd72edbf78f607c174636618)\/\d+$/i;
        if (regex.test(this.openSeaLink)) {
            const nftNumber = this.openSeaLink.split('/').pop();
            if (!isNaN(nftNumber)) {
                this.validNFT = true;
                this.buscarDadosNFT(nftNumber);
            } else {
                this.validNFT = false;
                this.nftData = null;
            }
        } else {
            this.validNFT = false;
            this.nftData = null;
            const match = this.openSeaLink.match(/\/(\d+)$/);
            if (match && match[1]) {
                this.linkCorreto = match[1];
            }
        }
    },
    buscarDadosNFT(nftNumber) {
        const url = nftNumber <= 5000 ? `https://nft.bcrypt.com.br/bhouse/pol/${nftNumber}` : `https://nft.bcrypt.com.br/bhero/pol/${nftNumber}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {

            let ID, rarity, battery, image, stamina, bombPower, speed, charge, capacity, level, abilities;
        
        if (nftNumber <= 5000) {
            ({ ID, rarity, charge, capacity } = data);
            image = `https://bcrypt.com.br/_next/image?url=%2Fbhouse%2F${data.image}House.png&w=128&q=75`;
        } else {
            ({ ID, rarity, level, battery, image, stamina, bombPower, speed, abilities  } = data);
            image = `https://bcrypt.com.br/_next/image?url=%2Fbhero%2F${data.image}&w=128&q=75`;
        }

            // Mapeamentos
            const rarityMap = {
                'C': 'Common',
                'R': 'Rare',
                'SR': 'Super Rare',
                'E': 'Epic',
                'L': 'Legend',
                'SL': 'Super Legend'
            };

            const houseRarityMap = {
                '0': 'Tiny House',
                '1': 'Mini House',
                '2': 'Lux House',
                '3': 'Pen House',
                '4': 'Villa',
                '5': 'Super Villa'
            };

            // Tratamento especial para a bateria
            const batteryStatus = battery === 0 ? 'No' : battery === 0.5 ? 'Yes' : battery;

            // Atualizar o estado com os dados mapeados
            if (nftNumber <= 5000) {
            // Tratar dados da casa
            this.nftData = {
                ID: data.id,
                rarity: houseRarityMap[data.rarity],
                charge: data.charge,
                capacity: data.capacity,
                image,
            };
        } else {
            // Tratar dados do herói
            this.nftData = {
                ID: data.id,
                rarity: rarityMap[data.rarity],
                battery: batteryStatus,
                image,
                stamina: data.stamina,
                bombPower: data.bombPower,
                speed: data.speed,
                level: data.level,
                abilities: abilities.map(ability => {
                    return {
                        name: ability,
                        icon: this.mapAbilityIcon(ability)
                    };
                })
            };
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados da NFT:', error);
        });
    },
    montarLinkCorreto(nftNumber) {
        if (nftNumber <= 5000) {
            return `https://opensea.io/assets/matic/0x2d5f4ba3e4a2d991bd72edbf78f607c174636618/${nftNumber}`;
        } else {
            return `https://opensea.io/assets/matic/0xd8a06936506379dbBe6e2d8aB1D8C96426320854/${nftNumber}`;
        }
    },
    mapRarityClass(rarity) {
        console.log(rarity)
      return rarity === 'Super Legend' ? 'quadradoSuperLenda' : rarity === 'Legend' ? 'quadradoLendario' : rarity === 'Epic' ? 'quadradoEpico' : rarity === 'Rare' ? 'quadradoRaro' : rarity === 'Super Rare' ? 'quadradoSRaro' : '';
    }
}
};
</script>


<style scoped>
.abilities {
  display: flex;
}
.mainInfo {
align-self: center;
align-content: center;
}
.warningHint {
    color: rgb(27, 25, 145);
    margin-top: 20px;
}
.imgThing {
  max-width: 78px;
  height: 75px;
  padding: 5%;
}
.warning {
  color: black;
    padding-top: 0px;
    margin: 0;
    margin-top: 30px;
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

.main {
  background-color: #CAD2C5;
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
  --width-of-input: 450px;
  --height-of-input: 40px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #2F3E46;
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
  margin-top: 20px;
  margin-left: 20%;
    justify-content: center;
}

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
@media screen and (max-width: 790px) {
  .form {
    padding: 0;

    justify-content: center;
    align-items: center;
    width: 75%;
  }
}

@media screen and (max-width: 1200px) {
    .heroisClas {
        grid-template-columns: repeat(2, minmax(250px, 1fr)); /* 3 itens por linha */
       
    }
}

@media screen and (max-width: 800px) {
    .heroisClas {
        grid-template-columns: repeat(1, minmax(300px, 1fr)); /* 2 itens por linha */
        margin: 0%;
        align-items: center;
        
    }

}
</style>