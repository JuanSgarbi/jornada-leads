<template>
<div>
  <div class=" mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 pb-12 md:grid-cols-3 mt-8">
        <div>
          <h2 class="text-base font-semibold leading-7 text-secondary">Informe seus dados de contato</h2>
          <p class="mt-1 text-sm leading-6 text-white">
            Esta etapa é importante para que possamos entrar em contato com você.<br />
            Ao avançar você concorda com a <a href="https://byecar-assets.sfo3.digitaloceanspaces.com/files/Politica_de_Privacidade.pdf" target="_blank" class="border-b border-white">Política de Privacidade</a> e <a href="https://byecar-assets.sfo3.digitaloceanspaces.com/files/Termos_de_Uso.pdf" target="_blank" class="border-b border-white">Termos de Uso</a> da byecar.
          </p>
        </div>

        <form @submit.prevent="createLead" class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          
          <div class="sm:col-span-4">
            <label for="first-name" class="block text-sm font-medium leading-6 text-secondary">Nome Completo:</label>
            <div class="mt-2">
              <input type="text" id="name" name="name" v-model.trim="v$.formData.name.$model" placeholder="Digite seu nome completo" class="block w-full rounded-md border-0 p-1.5 text-primary  shadow-sm ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6" :class="{'ring-fail' : v$.formData.name.$error}">
              <p>
                <small v-if="v$.formData.name.$error" class="text-fail">Este campo é obrigatório</small>
              </p>
            </div>
          </div>
  
          <div class="sm:col-span-4">
            <label for="num_cpf" class="block text-sm font-medium leading-6 text-secondary">CPF:</label>
            <div class="mt-2">
              <input type="text" id="num_cpf" name="num_cpf" v-model.trim="v$.formData.num_cpf.$model" v-mask="'###.###.###-##'"  placeholder="Digite seu CPF"  class="block w-full rounded-md border-0 p-1.5 text-primary  shadow-sm ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6" :class="{'ring-fail' : v$.formData.num_cpf.$error}">
              <p>
                <small v-if="v$.formData.num_cpf.$error" class="text-fail">Insira um CPF válido</small>
              </p>
            </div>
          </div>
  
          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-secondary">Seu melhor e-mail:</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" v-model.trim="v$.formData.email.$model" placeholder="Digite seu melhor e-mail" class="block w-full rounded-md border-0 p-1.5 text-primary  shadow-sm ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6" :class="{'ring-fail' : v$.formData.email.$error}">
              <p>
                <small v-if="v$.formData.email.$error" class="text-fail">Insira um email válido</small>
              </p>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="num_cel" class="block text-sm font-medium leading-6 text-secondary">Celular com Whatsapp:</label>
            <div class="mt-2">
              <input type="text" id="num_cel" name="num_cel" v-model.trim="v$.formData.num_cel.$model" v-mask="'(##) #####-####'"  placeholder="Digite seu celular" class="block w-full rounded-md border-0 p-1.5 text-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6" :class="{'ring-fail' : v$.formData.num_cel.$error}">
            </div>
            <p>
              <small v-if="v$.formData.num_cel.$error" class="text-fail">Insira um número válido</small>
            </p>
          </div>

          <div class="sm:col-span-4">
            <label for="num_cep" class="block text-sm font-medium leading-6 text-secondary">CEP da cidade que o carro será utilizado:</label>
            <div class="mt-2">
              <input type="text" id="num_cep" name="num_cep" v-model.trim="v$.formData.num_cep.$model" v-mask="'##.###-###'"  placeholder="Digite o CEP" class="block w-full rounded-md border-0 p-1.5 text-primary  shadow-sm ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6" :class="{'ring-fail' : v$.formData.num_cep.$error}">
            </div>
            <p>
              <small v-if="v$.formData.num_cep.$error" class="text-fail">Insira um CEP válido</small>
            </p>
          </div>
  
          <div class="sm:col-span-4">
            <label for="usingFor" class="block text-sm font-medium leading-6 text-secondary">O carro será utilizado para:</label>
            <div class="mt-2">
              <select id="usingFor" name="usingFor" v-model.trim="v$.formData.usingFor.$model" class="w-full rounded-md border-0 p-1.5 text-primary  shadow-sm ring-1 ring-inset ring-secondary focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6" :class="{'ring-fail' : v$.formData.usingFor.$error}">
                <option value="">Selecione</option>
                <option value="Trabalho em app">Trabalho em APPs</option>
                <option value="uso familiar">Uso familiar</option>
                <option value="uso corporativo">Uso corporativo</option>
              </select>
            </div>
            <p>
              <small v-if="v$.formData.usingFor.$error" class="text-fail">Este campo é obrigatório</small>
            </p>
          </div>

          <div class="sm:col-span-4">
            <div class="flex justify-center items-center">
              <button  class="py-2 px-8 text-lg bg-secondary hover:bg-primary rounded text-primary hover:text-secondary font-bold border border-primary hover:border-secondary">Iniciar</button>
            </div>
          </div>

        </form>
    
      </div>
  </div>
</div>
</template>

<script >
  import { useVuelidate } from '@vuelidate/core'
  import { required , email , minLength } from '@vuelidate/validators'
  import {cpfValido} from '../helplers/index.js'
  export default {
    setup(){
      return { v$: useVuelidate() }
    },
    data(){
      return {
        formData: {
          name: this.$store.state.lead.name ?? '',
          num_cpf: this.$store.state.lead.num_cpf ?? '',
          email: this.$store.state.lead.email ?? '',
          num_cel: this.$store.state.lead.num_cel ?? '',
          num_cep: this.$store.state.lead.num_cep ?? '',
          usingFor: this.$store.state.lead.usingFor ?? ''
        }
      }
    },
    validations () {
      return {
        formData: {
          name: { required },
          num_cpf: { required , cpfValido},
          email: { required , email },
          num_cel: { required , minLength: minLength(15)},
          num_cep: { required , minLength: minLength(10)},
          usingFor: { required },
        }
      }
    },
    methods:{
      async createLead(event){
        event.preventDefault();
        const isFormCorrect = await this.v$.$validate()
        
        if (!isFormCorrect) return
        const lead = this.formData
        
        this.$store.dispatch('storeLead', { data: lead, router: this.$router })
      }
    }

  }
  
</script>


