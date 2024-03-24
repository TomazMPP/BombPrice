<script>
export default {
  data() {
    return {
      listings: [],
      apiKey: 'bdf69195623d4a828d92a290ab965909',
    };
  },
  mounted() {
    this.fetchListings();
  },
  methods: {
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
        
        // Iniciar o processo de busca do Bcrypt Data
        await this.fetchBcryptData();
      } catch (error) {
        console.error('Erro ao buscar listagens:', error);
      }
    },
    async fetchBcryptData() {
  const fieldsToFetch = ['rarity', 'level', 'battery'];
  const rarityMap = {
        'C': 'Common',
        'R': 'Rare',
        'SR': 'Super Rare',
        'E': 'Epic',
        'L': 'Legend',
        'SL': 'Super Legend'
    };

    const batteryMap = {
        '0': 'No',
        '0.5': 'Yes'
    };

  for (let i = 0; i < this.listings.length; i++) {
    const listing = this.listings[i];
    const identifier = this.getIdentifier(listing)
;
    try {
      const response = await fetch(`https://api.bcrypt.com.br/bhero/pol/${identifier}`);
      const data = await response.json();
      
      if (data.hasOwnProperty('rarity') && rarityMap.hasOwnProperty(data.rarity)) {
                data.rarity = rarityMap[data.rarity];
            }

            if (data.hasOwnProperty('battery') && batteryMap.hasOwnProperty(data.battery.toString())) {
                data.battery = batteryMap[data.battery.toString()];
            }

      // Filtrar os dados para incluir apenas os campos desejados
      const filteredData = {};
      fieldsToFetch.forEach(field => {
        if (data.hasOwnProperty(field)) {
          filteredData[field] = data[field];
        }
      });
      
      // Atualizar a lista de listings com os dados Bcrypt filtrados
      this.listings[i].bcryptData = filteredData;
    } catch (error) {
      console.error('Erro ao buscar dados Bcrypt:', error);
    }
    
    // Aguardar 1 segundo antes de fazer a próxima requisição
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
  },
};

</script>


<template>
<div class="main">
    <div :class="['quadradoInfo', getSquareClass(listing)]" v-for="(listing, index) in listings" :key="index">
      <p><strong>ID:</strong> {{ getIdentifier(listing) }}</p>
      <p><strong>Price:</strong> {{ getPrice(listing) }}</p>
      <div v-if="listing.bcryptData">
        <ul>
          <li v-for="(value, key) in listing.bcryptData" :key="key">
            <strong>{{ key }}:</strong> {{ value }}
          </li>
        </ul>
        <p><a :href="'https://opensea.io/assets/matic/0xd8a06936506379dbbe6e2d8ab1d8c96426320854/' + getIdentifier(listing)" target="_blank" class="linkOpen"><u>OpenSea</u></a></p>
      </div>
    </div>
  </div>
  </template>
  
  
  <style>
.main {
    display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  gap: 20px;
  padding: 5%;
  background-color: #f9f9f9;
  border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}

.quadradoInfo {
  background-color: #b5c6da;
  color: rgb(0, 0, 0);
  padding: 15px; 
  border-radius: 10px;
  text-align: left;
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

.quadradoLendario {
  background-color: rgb(161, 97, 12);
}

.quadradoSuperLenda {
  background-color: blue;
}

.profit {
    background-color: green;
}

.linkOpen {
    text-decoration: none;
    color: #521f1f;
}
</style>