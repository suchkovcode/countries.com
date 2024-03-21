<template>
   <form @submit.prevent="submitSearch">
      <label for="default-search" class="text-gray-900 sr-only mb-2 text-sm font-medium"> Search </label>
      <div class="relative">
         <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg class="text-gray-500 h-4 w-4 min-w-4" aria-hidden="true">
               <use xlink:href="/img/sprite.svg#icon-search"></use>
            </svg>
         </div>
         <input
            v-model.trim="sanitizedQuery"
            type="search"
            pattern="[a-zA-Z]+"
            class="text-gray-900 border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-lg border p-4 ps-10 text-sm"
            placeholder="Search..." />
         <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-2.5 end-2.5 rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:ring-4">
            Submit
         </button>
      </div>
   </form>
</template>

<script setup lang="ts">
import DOMPurify from "dompurify";

const route = useRoute();
const router = useRouter();
const rawSearchQuery = ref(null);

const sanitizedQuery = computed({
   get: () => rawSearchQuery.value,
   set: (value) => {
      rawSearchQuery.value = DOMPurify.sanitize(value);
   },
});

const submitSearch = () => {
   const query = rawSearchQuery.value ? rawSearchQuery.value.toLowerCase() : "";
   router.push({
      query: {
         search: query,
      },
   });
};

onMounted(() => {
   rawSearchQuery.value = route.query.search;
});
</script>
