<template>
   <div class="flex justify-between">
      <NuxtLink
         v-if="data.prew"
         :to="`/${data.prew.cca3.toLowerCase()}`"
         class="me-3 flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
         <svg class="me-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true">
            <use xlink:href="/img/sprite.svg#icon-prew"></use>
         </svg>
         {{ data.prew.name.common }}
      </NuxtLink>
      <NuxtLink
         v-if="data.next"
         :to="`/${data.next.cca3.toLowerCase()}`"
         class="ml-auto flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
         {{ data.next.name.common }}
         <svg class="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true">
            <use xlink:href="/img/sprite.svg#icon-next"></use>
         </svg>
      </NuxtLink>
   </div>
</template>

<script setup lang="ts">
const props = defineProps({
   data: {
      type: Object,
      required: true,
   },
});
</script>
