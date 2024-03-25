<template>
<div id="app">
  <h2 class="title">Developed by <a href="https://github.com/tomazmpp">Tomaz</a></h2>
  <HeaderInicial @trocarHeader="trocarHeader" />
    <SwitchType @trocarComponente="trocarComponente" v-if="componenteAtual !== 'Donate'" />
    <component :is="componenteAtual" />
  </div>
</template>

<script>
import HeaderInicial from './components/HeaderInicial.vue'
import Bonecos from './components/Bonecos.vue'
import Donate from './components/Donate.vue'
import SwitchType from './components/SwitchType.vue'

export default {
  components: {
    HeaderInicial,
    Bonecos,
    Donate,
    SwitchType
  },
  data() {
    return {
      componenteAtual: 'Bonecos'
    }
  },
  methods: {
    trocarComponente(componente) {
    this.componenteAtual = componente;
  },
    trocarHeader() {
      this.componenteAtual = (this.componenteAtual === 'Bonecos') ? 'Donate' : 'Bonecos';
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
