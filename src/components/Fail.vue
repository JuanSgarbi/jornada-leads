<template>
<div class="absolute w-screen h-screen bg-fail top-0 left-0">
    <div class="container">
    <div class="flex flex-col justify-center items-center relative h-screen">
    <img class="h-10 w-auto mt-8 absolute top-8 left-0" src="https://byecar-assets.sfo3.cdn.digitaloceanspaces.com/landing_pages_themes/Byecar/byecar-logo-8.png" alt="">
        <img class="w-[20%]" src="../assets/images/car-error.svg" alt=".." />
        <h5 class="mt-4 mb-4 text-white" ><b>{{$store.state.lead.name}}, não encontramos nenhuma oferta de assinatura no seu perfil.</b></h5>
        <p class="text-white text-center">Entendemos que pode ser frustrante, mas isso não significa 
                que você não possa assinar seu carro conosco em breve, estamos 
                sempre evoluindo nossas análises.</p>
        <p class="text-white">
            Clique em <b>Nova Análise</b> para fazer o cadastro em nome de outra pessoa.
        </p>

        <div class="mt-6">
          <div class="  mx-auto">
            <router-link to="/assinatura" class="py-2 px-8 text-lg bg-secondary hover:bg-primary rounded text-primary hover:text-secondary font-bold border border-primary hover:border-secondary">Nova análise</router-link >
          </div>
          <div class="mt-6  mx-auto">
            <router-link to="/assinatura" class="py-2 px-8 text-lg bg-primary hover:bg-secondary rounded text-secondary hover:text-primary font-bold border border-secondary hover:border-primary">Ir para o site</router-link>
          </div>
        </div>
    </div>
    </div>
</div>
</template>