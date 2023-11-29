<template>
<div >
  <div class=" mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 pb-12 md:grid-cols-3 mt-8">
        <div>
          <h2 class="text-base font-semibold leading-7 text-secondary">Selecione as opções que mais combinam com você</h2>
        </div>

        <form @submit.prevent="addComplementaryInfos" class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">

          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-secondary">
                Consegue comprovar sua renda?
            </label>
            <small class="text-xs text-white">Com holerite ou IRPF</small>
            <div class="mt-2">
            <label class="inline-flex items-center">
                <input
                type="radio"
                v-model="v$.formData.comprova_renda.$model"
                name="comprova_renda"
                value="1"
                class="form-radio text-white"
                />
                <span class="ml-2 text-white">Sim</span>
            </label>
            <label class="inline-flex items-center ml-6">
                <input
                type="radio"
                v-model="v$.formData.comprova_renda.$model"
                name="comprova_renda"
                value="0"
                class="form-radio text-white"
                />
                <span class="ml-2 text-white">Não</span>
            </label>
            </div>
            <p>
              <small v-if="v$.formData.comprova_renda.$error" class="text-fail">Este campo é obrigatório</small>
            </p>
          </div>

          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-secondary">
                Tipo de contratação:
            </label>
            <div class="mt-2">
            <label class="inline-flex items-center">
                <input
                type="radio"
                v-model="v$.formData.tipo_contrato_id.$model"
                name="tipo_contrato_id"
                value="1"
                class="form-radio text-white"
                />
                <span class="ml-2 text-white">Pessoa Física</span>
            </label>
            <label class="inline-flex items-center ml-6">
                <input
                type="radio"
                v-model="v$.formData.tipo_contrato_id.$model"
                name="tipo_contrato_id"
                value="2"
                class="form-radio text-white"
                />
                <span class="ml-2 text-white">Pessoa jurídica</span>
            </label>
            </div>
            <p>
              <small v-if="v$.formData.tipo_contrato_id.$error" class="text-fail">Este campo é obrigatório</small>
            </p>
          </div>

          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-secondary">
                Forma de pagamento:
            </label>
            <div class="mt-2">
            <label class="inline-flex items-center">
                <input
                type="radio"
                v-model="v$.formData.forma_pagamento_id.$model"
                name="forma_pagamento_id"
                value="1"
                class="form-radio text-white"
                />
                <span class="ml-2 text-white">Boleto bancário</span>
            </label>
            <label class="inline-flex items-center ml-6">
                <input
                type="radio"
                v-model="v$.formData.forma_pagamento_id.$model"
                name="forma_pagamento_id"
                value="2"
                class="form-radio text-white"
                />
                <span class="ml-2 text-white">Cartão de crédito</span>
            </label>
            </div>
            <p>
              <small v-if="v$.formData.forma_pagamento_id.$error" class="text-fail">Este campo é obrigatório</small>
            </p>
          </div>

          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-secondary">
                Possui pendência financeira?
            </label>
            <div class="mt-2">
            <label class="inline-flex items-center">
                <input
                type="radio"
                v-model="v$.formData.pendencia_financeira.$model"
                name="pendencia_financeira"
                value="1"
                class="form-radio text-white"
                />
                <span class="ml-2 text-white">Sim</span>
            </label>
            <label class="inline-flex items-center ml-6">
                <input
                type="radio"
                v-model="v$.formData.pendencia_financeira.$model"
                name="pendencia_financeira"
                value="2"
                class="form-radio text-white"
                />
                <span class="ml-2 text-white">Não</span>
            </label>
            </div>
            <p>
              <small v-if="v$.formData.pendencia_financeira.$error" class="text-fail">Este campo é obrigatório</small>
            </p>
          </div>
  
          <div class="sm:col-span-4">
            <label for="usingFor" class="block text-sm font-medium leading-6 text-secondary">Franquia_km:</label>
            <div class="mt-2">
              <select id="usingFor" name="usingFor" v-model="v$.formData.franquia_km.$model" class="w-full rounded-md border-0 p-1.5 text-primary  shadow-sm ring-1 ring-inset ring-secondary focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6" :class="{'ring-fail' : v$.formData.franquia_km.$error}">
                <option value="">Selecione</option>
                <option value="1000">1000 KM</option>
                <option value="2000">2000 KM</option>
                <option value="3000">3000 KM</option>
              </select>
            </div>
            <p>
              <small v-if="v$.formData.franquia_km.$error" class="text-fail">Este campo é obrigatório</small>
            </p>
          </div>

          <div class="sm:col-span-4">
            <div class="flex justify-center items-center">
              <button  class="py-2 px-8 text-lg bg-secondary hover:bg-primary rounded text-primary hover:text-secondary font-bold border border-primary hover:border-secondary">Avançar</button>
            </div>
          </div>


        </form>
    
      </div>
  </div>
</div>

</template>

<script >
  import { useVuelidate } from '@vuelidate/core'
  import { required } from '@vuelidate/validators'
  export default {
    setup(){
      return { v$: useVuelidate() }
    },
    data(){
      return {
        formData: {
          franquia_km: this.$store.state.complementaryInfos.franquia_km ?? '',
          tipo_contrato_id: this.$store.state.complementaryInfos.tipo_contrato_id ?? '',
          comprova_renda: this.$store.state.complementaryInfos.comprova_renda ?? '',
          forma_pagamento_id: this.$store.state.complementaryInfos.forma_pagamento_id ?? '',
          pendencia_financeira: this.$store.state.complementaryInfos.pendencia_financeira ?? ''
        }
      }
    },
    validations () {
      return {
        formData: {
          franquia_km: {required},
          tipo_contrato_id: {required},
          comprova_renda: {required},
          forma_pagamento_id: {required},
          pendencia_financeira: {required}
        }
      }
    },
    methods:{
      async addComplementaryInfos(event){
        event.preventDefault();
        const isFormCorrect = await this.v$.$validate()
        
        if (!isFormCorrect) return
        const complementaryInfos = this.formData
        
        this.$store.dispatch('addComplementaryInfos', { data: complementaryInfos, router: this.$router })
      }
    }

  }
  
</script>