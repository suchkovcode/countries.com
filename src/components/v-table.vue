<template>
   <div class="relative overflow-x-auto rounded-lg border border-gray-300">
      <table class="w-full text-left text-sm text-gray-500">
         <thead class="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
               <th scope="col" class="px-6 py-3">Flag</th>
               <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                     Country
                     <a href="#">
                        <svg class="ms-1.5 h-3 w-3" aria-hidden="true">
                           <use xlink:href="/img/sprite.svg#icon-sort"></use>
                        </svg>
                     </a>
                  </div>
               </th>
               <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                     Population
                     <a href="#">
                        <svg class="ms-1.5 h-3 w-3" aria-hidden="true">
                           <use xlink:href="/img/sprite.svg#icon-sort"></use>
                        </svg>
                     </a>
                  </div>
               </th>
               <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                     CCA3
                     <a href="#">
                        <svg class="ms-1.5 h-3 w-3" aria-hidden="true">
                           <use xlink:href="/img/sprite.svg#icon-sort"></use>
                        </svg>
                     </a>
                  </div>
               </th>
               <th scope="col" class="px-6 py-3">Action</th>
            </tr>
         </thead>
         <tbody>
            <template v-for="item in data" :key="item.cca3">
               <tr v-show="matchesSearchQuery(item)" class="border-b bg-white">
                  <th class="px-6 py-4" scope="row">
                     <img class="block h-auto" :src="item.flags.svg" :alt="item.name.common" width="50" height="50" loading="lazy" />
                  </th>
                  <td class="px-6 py-4">{{ item.name.common }}</td>
                  <td class="px-6 py-4">{{ item.population.toLocaleString() }}</td>
                  <td class="px-6 py-4">{{ item.cca3 }}</td>
                  <td class="px-6 py-4">
                     <NuxtLink class="text-sky-600 hover:text-sky-500" :to="`/${item.cca3.toLowerCase()}`">Details</NuxtLink>
                  </td>
               </tr>
            </template>
         </tbody>
      </table>
   </div>
</template>

<script setup lang="ts">
const props = defineProps({
   data: {
      type: Array,
      required: true,
   },
});

const router = useRoute();
const searchParam = ref(router.query.search);

const matchesSearchQuerySequentially = (item, query) => {
   const itemArray = item.toLowerCase().split("");
   const queryArray = query.toLowerCase().split("");
   return queryArray.every((queryChar, index) => itemArray[index] === queryChar);
};

const matchesSearchQuery = (item) => {
   if (!searchParam.value) return true;
   const query = searchParam.value;
   return matchesSearchQuerySequentially(item.name.common, query) || matchesSearchQuerySequentially(item.cca3, query);
};

watch(
   () => router.query,
   (newQuery) => {
      searchParam.value = newQuery.search;
   },
   { immediate: true },
);
</script>
