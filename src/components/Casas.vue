<script>
export default {
  data() {
    return {
      listings: [],
      apiKey: 'bdf69195623d4a828d92a290ab965909',
      showMain: false,
    };
  },
  methods: {
    async fetchListings() {
      try {
        const response = await fetch('https://api.opensea.io/api/v2/listings/collection/bomber-house/all', {
          headers: {
            'X-API-KEY': this.apiKey,
          },
        });
        const data = await response.json();
        this.listings = data.listings;
      } catch (error) {
        console.error('Erro ao buscar listagens:', error);
      }
    },
    async fetchBcryptDataOnClick() {
  const fieldsToFetch = ['size', 'charge', 'capacity', 'image', 'type'];

  for (let i = 0; i < this.listings.length; i++) {
    const listing = this.listings[i];
    const identifier = this.getIdentifier(listing);

    try {
      this.showMain = true;
      const response = await fetch(`https://nft.bcrypt.com.br/bhouse/pol/${identifier}`);
      const data = await response.json();

      const filteredData = {};
      fieldsToFetch.forEach(field => {
        if (data.hasOwnProperty(field)) {
          filteredData[field] = data[field];
        }
      });

      if (filteredData.hasOwnProperty('image') && !filteredData.image.startsWith('http')) {
        filteredData.image = `https://bcrypt.com.br/_next/image?url=%2Fbhouse%2F${filteredData.image}House.png&w=128&q=75`; 
      }

      this.listings[i].bcryptData = filteredData;
    } catch (error) {
      console.error('Erro ao buscar dados do Bcrypt:', error);
    }

    await this.delay(1500);
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
      let formattedPrice = parseFloat(value) / Math.pow(10, 18); 
      return `${formattedPrice} ${currency}`;
    },
  },
  mounted() {
    this.fetchListings();
  },
};
</script>

<template>
  <div class="tudo">
     <div :class="{ 'botaoFetch': true, 'removeBorderRadius': showMain }">
      <button class="bta" @click="fetchBcryptDataOnClick">Get Houses</button>
      <p class="warning">
To get the houses data, you must click the button above</p>
</div>
<div class="main" v-if="showMain">
  <component :is="currentComponent"/>
    <div v-for="(listing, index) in listings" :key="index" class="quadradoInfo">
        <img :src="listing.bcryptData && listing.bcryptData.image" alt="Loading info..." class="imageHero" style="display: block; width: 100%;">
        <div v-if="listing.bcryptData">
            <p><strong>ID:</strong> {{ getIdentifier(listing) }}</p>
<p v-if="listing.bcryptData && listing.bcryptData.type"><strong>Type:</strong> {{ listing.bcryptData.type }}</p> 
<p><strong>Price:</strong> {{ getPrice(listing) }}</p>
<ul>
    <li v-for="(value, key) in listing.bcryptData" :key="key">
        <template v-if="key !== 'image' && key !== 'type'">
            <strong>{{ key }}:</strong> {{ value }}
        </template> 
    </li>
</ul>
<p><a :href="'https://opensea.io/assets/matic/0xd8a06936506379dbbe6e2d8ab1d8c96426320854/' + getIdentifier(listing)" target="_blank" class="linkOpen"><u>OpenSea</u></a></p>
        </div>
    </div>
</div>
</div>
</template>


  
  
  <style scoped> 
  .tudo {
    border: 2px solid black;
    border-top: 0px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
    .bta {
    background-color: #13315C;
  }

    .removeBorderRadius {
    border-bottom-right-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
  }
  .warning {
    background-color: #8DA9C4;
    padding-top: 0px;
    margin: 0;
    margin-top: 15px;
    color: black;
  }
  .botaoFetch {
    background-color: #8DA9C4;
    padding-top: 50px;
    padding: 50px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
.imageHero{
  max-width: 88px;
  max-height: 100px;
  padding: 5%;
}
.main {
    display: grid;
  grid-template-columns: repeat(4, minmax(0, 2fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  gap: 50px;
padding: 50px;
  background-color: #8DA9C4;
  border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    justify-content: center;
}

.quadradoInfo {
  background-color: #13315C;
  color: white;
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
