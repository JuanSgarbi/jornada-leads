<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="modelo in modelos" :key="modelo.id" class="flex justify-between gap-x-6 py-5">
      <div class="flex min-w-0 gap-x-4">
        <img class="h-16 w-18 " :src="modelo.url_foto" alt="..." />
        <div class="min-w-0 flex items-center">
          <p class="text-sm font-semibold leading-6 text-secondary">{{ modelo.nome_veiculo }}</p>
        </div>
      </div>
      <div class="flex items-center">
        <input type="checkbox"  class="form-checkbox checked:bg-secondary h-5 w-5" v-model="modelo.selected" @change="handleCheckboxChange(modelo)" :checked="isModeloSelecionado(modelo.id)">
      </div>
    </li>

  </ul>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed:{
      ...mapState(['modelos'])
    },  
    methods: {
      handleCheckboxChange(modelo) {
        if (modelo.selected) {
          this.$store.dispatch('adicionarModeloSelecionado', modelo);
        } else {
          this.$store.dispatch('removerModeloSelecionado', modelo.id);
        }
      },
      isModeloSelecionado(modeloId) {
        return this.$store.state.modelosSelected.some((modelo) => modelo.id === modeloId);
      },
    },
}
 
</script>