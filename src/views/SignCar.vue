
<template>
<div>
    <NavLinkJorney/>
    <FormLead />
</div>
</template>


<script >
  import NavLinkJorney from '../components/NavLinkJorney.vue';
  import FormLead from '../components/FormLead.vue';

  export default {
    name: 'Assinatura',
    components:{
        NavLinkJorney,
        FormLead
    }
  }
</script>