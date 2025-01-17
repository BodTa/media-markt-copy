<template>
  <navigationBar
    :toggleAllCategories="() => (allCategoriesOpen = !allCategoriesOpen)"
    :toggleMarketSearch="() => (marketSearchOpen = !marketSearchOpen)"
  />
  <NuxtPage />
  <footerBar />
  <div
    v-if="allCategoriesOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-40 pointer-events-none"
  >
    <div class="w-[25vw] h-full bg-white"></div>
  </div>
  <div
    v-if="marketSearchOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-40 pointer-events-none"
  >
    <div class="w-[25vw] h-full bg-white"></div>
  </div>
</template>

<script setup>
import("./style.css");
import { ref } from "vue";

const allCategoriesOpen = ref(false);
const marketSearchOpen = ref(false);
</script>
