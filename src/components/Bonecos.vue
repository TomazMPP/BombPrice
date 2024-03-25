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
    const fieldsToFetch = ['rarity', 'level', 'battery', 'image']; // Include 'image' field
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
        const identifier = this.getIdentifier(listing);

        try {
            const response = await fetch(`https://api.bcrypt.com.br/bhero/pol/${identifier}`);
            const data = await response.json();

            if (data.hasOwnProperty('rarity') && rarityMap.hasOwnProperty(data.rarity)) {
                data.rarity = rarityMap[data.rarity];
            }

            if (data.hasOwnProperty('battery') && batteryMap.hasOwnProperty(data.battery.toString())) {
                data.battery = batteryMap[data.battery.toString()];
            }

            // Include image data in filteredData
            const filteredData = {};
            fieldsToFetch.forEach(field => {
                if (data.hasOwnProperty(field)) {
                    filteredData[field] = data[field];
                }
            });

            // Update the image URL to a complete URL if needed
            if (filteredData.hasOwnProperty('image') && !filteredData.image.startsWith('http')) {
                filteredData.image = `https://bcrypt.com.br/_next/image?url=%2Fbhero%2F${filteredData.image}&w=128&q=75`; // Replace example.com with actual base URL
            }

            // Update the listings with filtered Bcrypt data
            this.listings[i].bcryptData = filteredData;
        } catch (error) {
            console.error('Error fetching Bcrypt data:', error);
        }

        // Wait for 1 second before making the next request
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
                </li>
            </ul>
            <p><a :href="'https://opensea.io/assets/matic/0xd8a06936506379dbbe6e2d8ab1d8c96426320854/' + getIdentifier(listing)" target="_blank" class="linkOpen"><u>OpenSea</u></a></p>
        </div>
    </div>
</div>

  </template>
  
  
  <style scoped> 
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
  background-color: #f9f9f9;
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