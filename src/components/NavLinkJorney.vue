<template>
  <div>
    <div class="py-8">
      <img 
          class="h-10 w-auto "
          src="https://byecar-assets.sfo3.cdn.digitaloceanspaces.com/landing_pages_themes/Byecar/byecar-logo-6.png"
          />

    </div>
    <nav aria-label="Progress">
        <ol role="list" class="divide-y divide-secondary rounded-md border border-secondary md:flex md:divide-y-0">
          <li class="relative md:flex md:flex-1">
            
            <div v-if="this.$store.state.step > 1">  
              <router-link to="/assinatura" class="group flex w-full items-center">
                <span class="flex items-center px-6 py-4 text-sm font-medium">
                  <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary group-hover:bg-secondary">
                    <svg class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span class="ml-4 text-sm font-medium text-secondary">Informe seus dados</span>
                </span>
              </router-link>
            </div>
            <div v-else-if="this.$store.state.step == 1">
              <router-link to="/assinatura" class="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
                <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-secondary">
                  <span class="text-secondary">01</span>
                </span>
                <span class="ml-4 text-sm font-medium text-secondary">Informe seus dados</span>
              </router-link >
            </div>
            
            <div class="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
              <svg class="h-full w-full text-secondary" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
              </svg>
            </div>
          </li>
          <li class="relative md:flex md:flex-1">
            <div v-if="this.$store.state.step == 2">
              <router-link to="/assinatura/contrato" class="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
                <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-secondary">
                  <span class="text-secondary">02</span>
                </span>
                <span class="ml-4 text-sm font-medium text-secondary">Personalize seu contrato</span>
              </router-link>
            </div>
            <div v-else-if="this.$store.state.step > 2">
              <router-link to="/assinatura/contrato" class="group flex w-full items-center">
                <span class="flex items-center px-6 py-4 text-sm font-medium">
                  <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary group-hover:bg-secondary">
                    <svg class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span class="ml-4 text-sm font-medium text-secondary">Personalize seu contrato</span>
                </span>
              </router-link>
            </div>
            <div v-else>
              <router-link to="#"  class="group flex items-center" >
                <span class="flex items-center px-6 py-4 text-sm font-medium">
                  <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                    <span class="text-gray-500 group-hover:text-gray-900">02</span>
                  </span>
                  <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Personalize seu contrato</span>
                </span>
              </router-link>
            </div>
            
            <div class="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
              <svg class="h-full w-full text-secondary" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
              </svg>
            </div>
          </li>
          <li class="relative md:flex md:flex-1">
            <div v-if="this.$store.state.step == 3">
              <router-link to="/assinatura/cotacao" class="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
                <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-secondary">
                  <span class="text-secondary">02</span>
                </span>
                <span class="ml-4 text-sm font-medium text-secondary">Escolha seu veículo</span>
              </router-link>
            </div>
            <div v-else-if="this.$store.state.step > 3">
              <router-link to="/assinatura/cotacao" class="group flex w-full items-center">
                <span class="flex items-center px-6 py-4 text-sm font-medium">
                  <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary group-hover:bg-secondary">
                    <svg class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span class="ml-4 text-sm font-medium text-secondary">Escolha seu veículo</span>
                </span>
              </router-link>
            </div>
            <div v-else>
              <router-link to="#"  class="group flex items-center">
                <span class="flex items-center px-6 py-4 text-sm font-medium">
                  <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                    <span class="text-gray-500 group-hover:text-gray-900">03</span>
                  </span>
                  <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Escolha seu veículo</span>
                </span>
              </router-link>
            </div>
          </li>
        </ol>
      </nav>
  </div>
</template>
