<template>
<div id="app">
    <HeaderInicial @trocarComponente="trocarComponente" />
    <component :is="componenteAtual" />
  </div>
</template>

<script>
import HeaderInicial from './components/HeaderInicial.vue'
import Bonecos from './components/Bonecos.vue'
import Donate from './components/Donate.vue'

export default {
  components: {
    HeaderInicial,
    Bonecos,
    Donate,
  },
  data() {
    return {
      componenteAtual: 'Bonecos'
    }
  },
  methods: {
    trocarComponente() {
      this.componenteAtual = (this.componenteAtual === 'Bonecos') ? 'Donate' : 'Bonecos';
    }
  }
}
</script>

<style>
</style>
