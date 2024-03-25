<template>
  <div id="app">
    <inject />
    <h2 class="title">Developed by <a href="https://github.com/tomazmpp">Tomaz</a></h2>
    <HeaderInicial @trocarComponente="trocarComponente" />
    <SwitchType @trocarComponente="trocarComponente" v-if="componenteAtual !== 'Donate'" />
    <component :is="componenteAtual" />
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

export default {
  components: {
    HeaderInicial,
    Bonecos,
    Donate,
    SwitchType,
    Casas,
    Check,
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
    if (element !== 'Bonecos') {
        this.fetchBcryptDataEnabled = false;
      } else {
        this.fetchBcryptDataEnabled = true;
      }
  }
  }
}
</script>


<style>
.title {
  color: black;
}
#app {
  justify-content: center;
}

@media screen and (max-width: 600px) {
    #app {
      width: 100%;
    }
}
</style>
