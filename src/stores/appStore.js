import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
   state: () => {
      return {
         countries: [],
      };
   },

   getters: {
      getCountry: (state) => {
         return (id) => state.countries.find((item) => item.cca3.toLowerCase() === id);
      },

      getCountryPrew: (state) => {
         return (id) => {
            const index = state.countries.findIndex((item) => item.cca3.toLowerCase() === id);
            if (index !== -1 && index > 0) {
               return state.countries[index - 1];
            }
            return null;
         };
      },

      getCountryNext: (state) => {
         return (id) => {
            const index = state.countries.findIndex((item) => item.cca3.toLowerCase() === id);
            if (index !== -1 && index < state.countries.length - 1) {
               return state.countries[index + 1];
            }
            return null;
         };
      },
   },

   actions: {
      async setCountries(value) {
         this.countries = value;
      },
   },
});
