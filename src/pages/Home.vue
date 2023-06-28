<template>
  <div class="w-full">
    <div class="relative">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 lg:w-full lg:max-w-2xl">
          <svg
            class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>
          <div class="relative px-6 py-4 sm:py-8 lg:px-8 lg:py-12 lg:pr-0">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1>Bienvenue chez ADP</h1>
              <h2 class="mt-4">Adhésif Décoration Publicité</h2>
              <h3 class="mt-8">
                Nous sommes spécialisés dans la création de panneaux décorés et
                d'adhésifs pour le covering de véhicules et les devantures de
                magasins. Avec notre équipe d'experts passionnés, nous mettons
                en valeur votre entreprise grâce à des solutions graphiques
                innovantes et personnalisées.
              </h3>
              <h3 class="mt-4">
                Laissez-nous transformer vos idées en réalité !
              </h3>
              <div class="mt-10 flex items-center gap-x-6">
                <router-link
                  to="/contact"
                  class="rounded-md bg-Primary px-3.5 py-2.5 text-center text-sm font-semibold text-Secondary shadow-sm hover:bg-Neutral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Neutral"
                  >Nous contacter</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="lg:aspect-auto aspect-[3/2] object-cover lg:h-full lg:w-full"
          src="/img/homeImg.webp"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
