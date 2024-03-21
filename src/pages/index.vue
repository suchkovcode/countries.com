<template>
   <v-search class="mb-10" />
   <v-table :data="store.countries" />
</template>

<script setup lang="ts">
const store = useAppStore();
const fetchCountries = async () => {
   try {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,population,flags,maps");

      if (!response.ok) {
         throw new Error("Проблема при получении данных стран");
      }
      const countries = await response.json();
      return countries;
   } catch (error) {
      console.error("Ошибка при запросе данных: ", error);
      return [];
   }
};

const { data } = await useAsyncData("countries", fetchCountries);

store.setCountries(data.value);
</script>
