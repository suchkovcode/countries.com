<template>
   <section class="flex justify-center items-center min-h-full h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
         <p class="text-sky-600 text-base font-semibold">{{ error.statusCode }}</p>
         <h1 class="text-gray-900 mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Oppss!</h1>
         <p class="text-gray-600 mt-6 text-base leading-7">
            {{ error.message }}
         </p>
         <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
               href="/"
               class="bg-sky-600 text-white hover:bg-sky-500 focus-visible:outline-sky-600 rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
               Go back home
            </a>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
const proprs = defineProps({
   error: {
      type: Object,
      required: true,
   },
});
</script>
