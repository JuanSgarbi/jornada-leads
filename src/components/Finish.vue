<template>
 <div class="container">
        <div class="flex flex-col justify-center items-center relative h-screen">
            <img class="h-10 w-auto mt-8 absolute top-8 left-0" src="https://byecar-assets.sfo3.cdn.digitaloceanspaces.com/landing_pages_themes/Byecar/byecar-logo-8.png" alt="">
            <p class="text-secondary mt-6">
                <b>Agora é com a gente!</b> 
            </p>

            <p class="text-secondary mt-6">
                Em breve nossa equipe entrará em contato com você
            </p>

            <div class="mt-8">
                <button @click="finishJourney" class="py-2 px-8 w-full  text-lg bg-secondary hover:bg-primary rounded text-primary hover:text-secondary font-bold border border-primary hover:border-secondary">Voltar para o site</button>
            </div>
        </div>
    </div>   
</template>

<script>
export default {
    methods:{
        finishJourney(event){
            event.preventDefault()
            this.$store.commit('skipStep',1)
            this.$router.push('/assinatura')
        }
    }
}
</script>
