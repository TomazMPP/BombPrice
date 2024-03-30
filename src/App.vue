<template>
  <div id="app">
    <inject />
    <div class="textos">
    <h2 class="title">Developed by <a href="https://github.com/TomazMPP/BombPrice" class="linkGit">Tomaz</a></h2>
    <h3 class="title projeto">Novo Projeto! Em PT-BR: <a href="https://wiki.bombtutorial.info/" class="linkGit">   BombTutorial - o guia brasileiro de BombCrypto</a></h3>
  </div>
    <HeaderInicial @trocarComponente="trocarComponente" />
    <SwitchType @trocarComponente="trocarComponente" v-if="componenteAtual !== 'Donate' && componenteAtual !== 'Wallets' && componenteAtual !== 'Validation'" />
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
  color: rgb(0, 0, 0);
  background-color: #52796F;
  border-radius: 5px;
  display: inline-block;
  padding: 10px;
  margin: 0;
  padding-left: 20px;
  padding-right: 20px;
}
.projeto {
  color: white;
  background-color: rgb(109, 52, 52);
}
.linkGit {
  color: #CAD2C5;
}
.linkGit:hover {
  color: #2F3E46;
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
