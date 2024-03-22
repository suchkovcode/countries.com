<template>
   <nav class="flex rounded-lg border border-gray-300 bg-gray-50 px-5 py-3 text-gray-700" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
         <li class="inline-flex items-center">
            <NuxtLink to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
               <svg class="me-2.5 h-3 w-3" aria-hidden="true">
                  <use xlink:href="/img/sprite.svg#icon-home"></use>
               </svg>
               Home
            </NuxtLink>
         </li>
         <li aria-current="page">
            <div class="flex items-center">
               <svg class="mx-1 h-3 w-3 text-gray-400" aria-hidden="true">
                  <use xlink:href="/img/sprite.svg#icon-arrow"></use>
               </svg>
               <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2">{{ country }}</span>
            </div>
         </li>
      </ol>
   </nav>
</template>

<script setup lang="ts">
const props = defineProps({
   country: {
      type: String,
      required: true,
   },
});
</script>
