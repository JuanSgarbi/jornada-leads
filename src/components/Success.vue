<template>
<div class="absolute w-screen h-screen bg-success top-0 left-0">
    <div class="container">
    <div class="flex flex-col justify-center items-center relative h-screen">
    <img class="h-10 w-auto mt-8 absolute top-8 left-0" src="https://byecar-assets.sfo3.cdn.digitaloceanspaces.com/landing_pages_themes/Byecar/byecar-logo-8.png" alt="">
        <img class="w-[20%]" src="../assets/images/car-success.svg" alt=".." />
        <h5 class="mt-4 mb-4 text-white" ><b>Hey {{$store.state.lead.name}}, parabéns! Seu cadastro foi pré-aprovado.</b></h5>
        <p class="text-white">Agora vamos encontrar a melhor opção pra você.</p>

        <div class="mt-4">
          <div class="  mx-auto">
            <router-link to="/assinatura/contrato" class="py-2 px-8 text-lg bg-primary hover:bg-secondary rounded text-secondary hover:text-primary font-bold border border-secondary hover:border-primary">Montar meu plano</router-link>
          </div>
        </div>
    </div>
    </div>
</div>
</template>