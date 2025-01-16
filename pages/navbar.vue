<template>
  <div>
    <navigationBar
      :toggleAllCategories="() => (allCategoriesOpen = !allCategoriesOpen)"
      :toggleMarketSearch="() => (marketSearchOpen = !marketSearchOpen)"
    />
  </div>
  <div
    v-if="allCategoriesOpen || marketSearchOpen"
    class="absolute w-full bg-black/40 z-20 h-screen pointer-events-none top-0"
  >
    <div
      v-if="allCategoriesOpen"
      class="absolute w-1/5 h-screen bg-white z-10 top-0 left-0 rounded-r-[10px]"
    >
      All Categories Content Here
    </div>

    <div
      v-if="marketSearchOpen"
      class="absolute w-1/5 h-screen bg-white z-10 top-0 right-0 rounded-l-[10px]"
    >
      Market Search Content Here
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const allCategoriesOpen = ref(false);
const marketSearchOpen = ref(false);
</script>
