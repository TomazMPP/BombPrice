<template>
  <div id="app">
    <Analytics />
    <h2 class="title">Developed by <a href="https://github.com/tomazmpp">Tomaz</a></h2>
    <HeaderInicial @trocarComponente="trocarComponente" />
    <SwitchType @trocarComponente="trocarComponente" v-if="componenteAtual !== 'Donate'" />
    <component :is="componenteAtual" />
  </div>
</template>

<script>
import { Analytics } from "@vercel/analytics/vue"
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
    Analytics
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
        this.fetchBcryptDataEnabled = false; // Desabilitar as requisições ao trocar de componente
      } else {
        this.fetchBcryptDataEnabled = true; // Habilitar as requisições ao voltar para o componente 'Bonecos'
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
</style>
