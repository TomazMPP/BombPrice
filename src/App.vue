<template>
  <div id="app">
    <inject />
    <h2 class="title">Developed by <a href="https://github.com/TomazMPP/BombPrice" class="linkGit">Tomaz</a></h2>
    <HeaderInicial @trocarComponente="trocarComponente" />
    <SwitchType @trocarComponente="trocarComponente" v-if="componenteAtual !== 'Donate' && componenteAtual !== 'Wallets'" />
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

export default {
  components: {
    HeaderInicial,
    Bonecos,
    Donate,
    SwitchType,
    Casas,
    Check,
    Wallets,
    inject
  },
  data() {
    return {
      componenteAtual: 'Bonecos'
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
.bomber {
  width: 250px;
  position:absolute;
  bottom: 0%;
  left: 2%;
}
.title {
  color: rgb(0, 0, 0);
  background-color: #52796F;
  border-radius: 5px;
  display: inline-block;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.linkGit {
  color: #CAD2C5;
}
.linkGit:hover {
  color: #2F3E46;
}
#app {
  justify-content: center;
}

@media screen and (max-width: 1500px) {
  .bomber {
    display: none;
  }
}

@media screen and (max-width: 600px) {
    #app {
      width: 100%;
    }
}
</style>
