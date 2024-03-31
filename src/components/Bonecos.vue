<script>
export default {
  data() {
    return {
      listings: [],
      apiKey: 'bdf69195623d4a828d92a290ab965909',
      showMain: false,
    };
  },
  beforeDestroy() {
    this.fetchBcryptDataCancel();
  },
  mounted() {
    this.fetchListings();
  },
  methods: {
    mapAbilityIcon(ability) {
    return `https://bcrypt.com.br/_next/image?url=%2Fatts%2F${ability}_icon.png&w=48&q=75`;
  },
    getSquareClass(listing) {
        const formattedPrice = this.getPrice(listing);

      if (listing.bcryptData && listing.bcryptData.rarity === 'Legend') {
        return 'quadradoLendario';
      } else if (listing.bcryptData && listing.bcryptData.rarity === 'Super Legend') {
        return 'quadradoSuperLenda';
      } else {
        return 'quadradoInfo';
      }
    },
    async fetchListings() {
      try {
        const response = await fetch('https://api.opensea.io/api/v2/listings/collection/bomber-hero-polygon/all', {
          headers: {
            'X-API-KEY': this.apiKey,
          },
        });
        const data = await response.json();
        this.listings = data.listings;
        
        await this.fetchBcryptData();
      } catch (error) {
        console.error('Erro ao buscar listagens:', error);
      }
    },
    async fetchBcryptDataOnClick() {
      
    const fieldsToFetch = ['rarity', 'level', 'image', 'abilities' ]; 
    const rarityMap = {
        'C': 'Common',
        'R': 'Rare',
        'SR': 'Super Rare',
        'E': 'Epic',
        'L': 'Legend',
        'SL': 'Super Legend'
    };

    for (let i = 0; i < this.listings.length; i++) {
        const listing = this.listings[i];
        const identifier = this.getIdentifier(listing);

      
        try {
    this.showMain = true;
    const response = await fetch(`https://nft.bcrypt.com.br/bhero/pol/${identifier}`);
    const data = await response.json();

    if (data.hasOwnProperty('rarity') && rarityMap.hasOwnProperty(data.rarity)) {
        data.rarity = rarityMap[data.rarity];
    }

    const filteredData = {};
    fieldsToFetch.forEach(field => {
        if (data.hasOwnProperty(field)) {
            filteredData[field] = data[field];
        }
    });

    if (filteredData.hasOwnProperty('image') && !filteredData.image.startsWith('http')) {
        filteredData.image = `https://bcrypt.com.br/_next/image?url=%2Fbhero%2F${filteredData.image}&w=128&q=75`;
    }

    if (data.hasOwnProperty('abilities')) {
        this.listings[i].bcryptData.abilities = filteredData.abilities.map(ability => this.mapAbilityIcon(ability));

    }

    if (!this.listings[i].bcryptData) {
        this.listings[i].bcryptData = {};
    }

    this.listings[i].bcryptData = filteredData;
} catch (error) {
    console.error('Error fetching Bcrypt data:', error);
}

        await this.delay(1000);
    }
},
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    getIdentifier(listing) {
      return listing.protocol_data.parameters.offer[0].identifierOrCriteria;
    },
    getPrice(listing) {
      const { currency, value } = listing.price.current;
      let formattedPrice = parseFloat(value) / Math.pow(10, 18); // Convertendo para Matic
      return `${formattedPrice} ${currency}`;
    },
    mapRarityClass(rarity) {
      return rarity === 'SL' ? 'quadradoSuperLenda' : rarity === 'L' ? 'quadradoLendario' : rarity === 'E' ? 'quadradoEpico' : rarity === 'R' ? 'quadradoRaro' : rarity === 'SR' ? 'quadradoSRaro' : '';
    },
  },
};

</script>


<template>
 <div :class="{ 'botaoFetch': true, 'removeBorderRadius': showMain }">
    
    <button class="bta" @click="fetchBcryptDataOnClick">Get Heroes</button>
    <p class="warning">
To get the heroes data, you must click the button above</p>
  </div>
<div class="main" v-if="showMain">
  <component :is="currentComponent"/>
    <div v-for="(listing, index) in listings" :key="index" :class="['quadradoInfo', getSquareClass(listing)]">
        <img :src="listing.bcryptData && listing.bcryptData.image" alt="Loading info..." class="imageHero" style="display: block; width: 100%;">
        <div v-if="listing.bcryptData">
            <p><strong>ID:</strong> {{ getIdentifier(listing) }}</p>
            <p><strong>Price:</strong> {{ getPrice(listing) }}</p>
            <ul>
                <li v-for="(value, key) in listing.bcryptData" :key="key">
                    <template v-if="key !== 'image'">
                        <strong>{{ key }}:</strong> {{ value }}
                    </template> 
                    <template v-else-if="key === 'abilities'">
                <strong>{{ key }}:</strong>
                <div class="abilities">
                  <img v-for="(ability, index) in value" :key="index" v-bind:src="ability" :alt="ability">
                </div>
            </template>
                </li>
                
            </ul>
            
</div>
            <p><a :href="'https://opensea.io/assets/matic/0xd8a06936506379dbbe6e2d8ab1d8c96426320854/' + getIdentifier(listing)" target="_blank" class="linkOpen"><u>OpenSea</u></a></p>
        </div>
    </div>

  </template>
  
  
  <style scoped> 
  .bta {
    background-color: #2F3E46;
  }
  .removeBorderRadius {
    border-bottom-right-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
  }
    .warning {
    background-color: #52796F;
    padding-top: 0px;
    margin: 0;
    margin-top: 15px;
    color: white;
  }
  .botaoFetch {
    background-color: #52796F;
    padding-top: 50px;
    padding: 50px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
.imageHero{
  max-width: 78px;
  height: 75px;
  padding: 5%;
}
.main {
    display: grid;
  grid-template-columns: repeat(4, minmax(0, 2fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  gap: 50px;
padding: 50px;
  background-color: #52796F;
  border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    justify-content: center;
}

.quadradoInfo {
  background-color: #b5c6da;
  color: rgb(0, 0, 0);
  padding: 15px; 
  border-radius: 10px;
  text-align: left;
  width: 220px;
}

ul, li {
    list-style: none;
    text-align: left;
    padding: 0;
    margin: 0;
    text-transform: capitalize;
}
.quadradoInfo p {
  margin: 0;
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

.linkOpen {
    text-decoration: none;
    color: #521f1f;
}

@media screen and (max-width: 1200px) {
    .main {
        grid-template-columns: repeat(3, minmax(250px, 1fr)); /* 3 itens por linha */
       
    }
}

@media screen and (max-width: 800px) {
    .main {
        grid-template-columns: repeat(2, minmax(300px, 1fr)); /* 2 itens por linha */
        margin: 0%;
        align-items: center;
        
    }
}

@media screen and (max-width: 600px) {
    .main {
      margin: 0;
        grid-template-columns: repeat(1, minmax(400px, 1fr)); /* 1 item por linha */
    }
}
</style>