<template>
<div>
  <div class=" mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 pb-12 md:grid-cols-3 mt-8">
        <div>
          <h2 class="text-base font-semibold leading-7 text-secondary">Hora de selecionar os modelos que você mais curte</h2>
          <p class="mt-1 text-sm leading-6 text-white">
            Você precisa selecionar pelo menos um modelo para continuar.
          </p>
        </div>

        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
  
          <div class="sm:col-span-4">
            <label for="categoria" class="block text-sm font-medium leading-6 text-secondary">Selecione uma categoria:</label>
            <div class="mt-2">
              <select id="categoria" name="categoria" v-model="formData.categoria" @change="searchModels" class="w-full rounded-md border-0 p-1.5 text-primary  shadow-sm ring-1 ring-inset ring-secondary focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6">
                <option value="">Selecione</option>
                <option value="economico">Econômico</option>
                <option value="executivo">Executivo</option>
                <option value="caminhonete">Caminhonete</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
              </select>
            </div>
          </div>
        
          <div class="sm:col-span-4">
            
            <CarCardList/>
          </div>

          <div class="sm:col-span-4">
            <div class="flex justify-center items-center">
              <button @click="sendQuotation" :disabled="this.$store.state.modelosSelected.length == 0" class="py-2 px-8 text-lg bg-secondary hover:bg-primary rounded text-primary hover:text-secondary font-bold border border-primary hover:border-secondary" >Avançar</button>
            </div>
          </div>

        </div>
    
      </div>
  </div>
</div>
</template>

<script >
import CarCardList from './CarCardList.vue'
  export default {
    data(){
      return {
        formData: {
          categoria: ''
        }

      }
    },
    components: {
      CarCardList
    },
    methods:{
      searchModels(event){
        event.preventDefault();
        const categoria = this.formData
        
        this.$store.dispatch('searchModels', categoria)
      },
      sendQuotation(event){
        event.preventDefault();

        this.$store.dispatch('sendQuotation', { router: this.$router })
      }
    }
  }
  
</script>