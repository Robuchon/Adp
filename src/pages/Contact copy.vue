<template>
  <div class="relative isolate mt-16">
    <div class=" max-w-7xl flex items-center">
      <div
        class="lg:static mx-auto"
      >
        <div class="relative mx-auto px-6 pb-10 pt-12 sm:pt-16 lg:px-8 lg:py-24 max-w-xl lg:mx-0 lg:max-w-lg">
          <div
            class="absolute inset-y-0 left-0 right-0 -z-10 w-full overflow-hidden ring-1 ring-Neutral/20 rounded-xl lg:w-full"
          >
            <svg
              class="absolute inset-0 h-full w-full stroke-Neutral/40 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="100%" y="-1" class="overflow-visible fill-Neutral/20">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
              />
            </svg>
            <div
              class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
              aria-hidden="true"
            >
              <div
                class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#8A2BE2] to-[#FFD700] opacity-20"
                style="
                  clip-path: polygon(
                    74.1% 56.1%,
                    100% 38.6%,
                    97.5% 73.3%,
                    85.5% 100%,
                    80.7% 98.2%,
                    72.5% 67.7%,
                    60.2% 37.8%,
                    52.4% 32.2%,
                    47.5% 41.9%,
                    45.2% 65.8%,
                    27.5% 23.5%,
                    0.1% 35.4%,
                    17.9% 0.1%,
                    27.6% 23.5%,
                    76.1% 2.6%,
                    74.1% 56.1%
                  );
                "
              />
            </div>
          </div>
          <h2 class="text-3xl font-bold tracking-tight">
            Contactez-moi
          </h2>
          <p class="mt-6 text-lg leading-8 lg:w-[90%]">
            Je serais ravi de vous aider avec votre projet. N'hésitez pas à me contacter pour toute question, demande de renseignements, devis ou prise de rendez-vous. Je suis disponible et prêt à répondre à toutes vos interrogations.
          </p>
          <p class="mt-6 text-lg leading-8 lg:w-[90%]">
            Mon objectif est de travailler avec vous et de concrétiser votre projet selon vos souhaits. Je suis impatient de collaborer ensemble et de faire de votre idée une réalité.
          </p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-Primary">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon
                  class="h-7 w-6"
                  aria-hidden="true"
                />
              </dt>
              <dd>646, chemin de Cabrol<br />06580 Pegomas</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="h-7 w-6" aria-hidden="true" />
              </dt>
              <dd>
                <a class="hover:text-Neutral" href="tel:+33 615932846"
                  >+33 615932846</a
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon
                  class="h-7 w-6"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a class="hover:text-Neutral" href="mailto:adp@cegetel.net"
                  >adp@cegetel.net</a
                >
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <!-- <form
        action="#"
        method="POST"
        class="px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:py-24"
      >
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-Primary"
                >First name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 bg-Secondary/20 px-3.5 py-2 text-Primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-Neutral sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-Primary"
                >Last name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 bg-Secondary/20 px-3.5 py-2 text-Primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-Neutral sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-Primary"
                >Email</label
              >
              <div class="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 bg-Secondary/20 px-3.5 py-2 text-Primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-Neutral sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone-number"
                class="block text-sm font-semibold leading-6 text-Primary"
                >Phone number</label
              >
              <div class="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autocomplete="tel"
                  class="block w-full rounded-md border-0 bg-Secondary/20 px-3.5 py-2 text-Primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-Neutral sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-Primary"
                >Message</label
              >
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  class="block w-full rounded-md border-0 bg-Secondary/20 px-3.5 py-2 text-Primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-Neutral sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button
              type="submit"
              class="rounded-md bg-Primary px-3.5 py-2.5 text-center text-sm font-semibold text-Secondary shadow-sm hover:bg-Neutral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Neutral"
            >
              Send message
            </button>
          </div>
        </div>
      </form> -->
    </div>
  </div>
</template>

<script setup>
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";
</script>

<style lang="scss" scoped></style>
