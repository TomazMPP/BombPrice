<template>
  <div id="app">
    <inject />
    <div class="textos">
    <h2 class="title">Developed by <a href="" class="linkGit">Tomaz</a></h2>
    <h3 class="title projeto">Check <a href="https://bombtutorial.info/" class="linkGit secondLink">BombTutorial HUB</a> to see all my projects</h3>
  </div>
    <HeaderInicial @trocarComponente="trocarComponente" />
    <SwitchType @trocarComponente="trocarComponente" v-if="componenteAtual !== 'Donate'" />
    <component :is="componenteAtual" />
    <img src="https://bombcrypto.io/static/media/BcoinTokenHero.e064f950a30385943c95.png" alt="Bomb Hero" class="bomber">
  </div>
</template>

<script>
import { inject } from "@vercel/analytics"
import HeaderInicial from './components/HeaderInicial.vue'
import Bonecos from './components/Bonecos.vue'
import Donate from './components/Donate.vue'
import SwitchType from './components/SwitchType.vue'
import Casas from './components/Casas.vue'
import Check from './components/Check.vue'
import Wallets from './components/Wallets.vue'
import Validation from './components/Validation.vue'
export default {
  components: {
    HeaderInicial,
    Bonecos,
    Donate,
    SwitchType,
    Casas,
    Check,
    Wallets,
    Validation,
    inject
  },
  data() {
    return {
      componenteAtual: 'Validation'
    }
  },
  mounted() {
    if (window.location.hash === '#listings') {
      this.trocarComponente('Check');
    }
  },
  methods: {
    trocarComponente(element) {
    this.componenteAtual = element;
    }
  },
}
</script>


<style>
.textos {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin-bottom: 10px;
}

.bomber {
  width: 250px;
  position:absolute;
  bottom: 0%;
  left: 2%;
}

.title {
  color: #EEF4ED;
  background-color: #13315C;
  border-radius: 5px;
  display: inline-block;
  padding: 10px;
  margin: 0;
  padding-left: 20px;
  padding-right: 20px;
  border: 2px solid black;
}
.projeto {
  color: black;
  background-color: #0ed869;
  
}
.linkGit {
  color: #5d9c36;
}
.linkGit:hover {
  color: #8DA9C4;
}
.secondLink {
  color: #0B2545;
  font-weight: 700;
}
.secondLink:hover {
  color: #134074;
}
#app {
  justify-content: center;
  min-width: 800px;
  
}

@media screen and (max-width: 1500px) {
  .bomber {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  #app {
    justify-content: center;
    align-items: center;
    align-content: center;
    min-width: 0px;
}

}
@media screen and (max-width: 600px) {
    #app {
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
    }
}
</style>
