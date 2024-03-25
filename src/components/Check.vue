<template>
    <div>
      <div v-for="(hero, index) in heroes" :key="index">
        <img :src="hero.image" alt="Hero Image">
        <p>Rarity: {{ hero.rarity }}</p>
        <p>Battery: {{ hero.battery }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        heroIds: [2450340, 1366082],
        heroes: []
      };
    },
    mounted() {
      this.fetchHeroes();
    },
    methods: {
      fetchHeroes() {
        this.heroIds.forEach(id => {
          setTimeout(() => {
            fetch(`https://api.bcrypt.com.br/bhero/pol/${id}`)
              .then(response => response.json())
              .then(data => {
                this.heroes.push({
                  image: data.image,
                  rarity: data.rarity,
                  battery: data.battery
                });
              })
              .catch(error => {
                console.error('Error fetching hero:', error);
              });
          }, 1000 * id); // 1 second interval
        });
      }
    }
  };
  </script>
  
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