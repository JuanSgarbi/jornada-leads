<template>
    <div class="container">
        <div class="flex flex-col justify-center items-center relative h-screen">
            <img class="h-10 w-auto mt-8 absolute top-8 left-0" src="https://byecar-assets.sfo3.cdn.digitaloceanspaces.com/landing_pages_themes/Byecar/byecar-logo-8.png" alt="">
            <img class="w-[70%]" src="../assets/images/tag-semparar.png" alt="">
            <p class="text-secondary mt-6">
                <b>Heey, boa notícia!</b> Temos uma condição especial com a <b>Sem Parar</b> para você ter ainda mais comodidade com seu carro novo,&nbsp;
            são <b>6 mensalidades</b> sem custos!
            </p>

            <div class="mt-6 w-[70%]">
                <div class="">
                <button @click="sendTagSemParar" class="py-2 px-8 w-full  text-lg bg-secondary hover:bg-primary rounded text-primary hover:text-secondary font-bold border border-primary hover:border-secondary">Quero uma TAG adicional</button>
                </div>
                <div class=" mt-6 ">
                    <button @click="nextStep" class="py-2 px-8 w-full  text-lg bg-primary hover:bg-secondary rounded text-secondary hover:text-primary font-bold border border-secondary hover:border-primary">Não tenho interesse</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        sendTagSemParar(event){
            event.preventDefault()
            this.$store.dispatch('sendTagSemParar', { data: '' , router: this.$router })
        },
        nextStep(event){
            event.preventDefault()
            this.$router.push('/assinatura/concluido')
        }
    }
}
</script>