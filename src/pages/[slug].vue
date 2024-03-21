<template>
   <Title>{{ country.name.common }}</Title>
   <v-breadcrumb class="mb-10" :country="country.name.common" />
   <div class="relative mb-5 overflow-x-auto rounded-lg border border-gray-300">
      <table class="w-full text-left text-sm text-gray-500">
         <thead class="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
               <th scope="col" class="px-6 py-3">Flag</th>
               <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Country</div>
               </th>
               <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Population</div>
               </th>
               <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">CCA3</div>
               </th>
               <th scope="col" class="px-6 py-3">Maps</th>
            </tr>
         </thead>
         <tbody>
            <tr class="border-b bg-white">
               <th class="px-6 py-4" scope="row">
                  <img class="block h-auto" :src="country.flags.svg" :alt="country.name.common" width="50" height="50" />
               </th>
               <td class="px-6 py-4">{{ country.name.common }}</td>
               <td class="px-6 py-4">{{ country.population.toLocaleString() }}</td>
               <td class="px-6 py-4">{{ country.cca3 }}</td>
               <td class="px-6 py-4">
                  <a class="text-sky-600 hover:text-sky-500" :href="`${country.maps.googleMaps}`" target="_blank">View</a>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <v-pagination :data="{ prew: countryPrew, next: countryNext }" />
</template>

<script setup lang="ts">
const router = useRoute();
const store = useAppStore();

const country = store.getCountry(router.params.slug);
const countryPrew = store.getCountryPrew(router.params.slug);
const countryNext = store.getCountryNext(router.params.slug);
</script>
