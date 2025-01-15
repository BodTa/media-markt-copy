<template>
  <div>
    <navigationBar
      :toggleAllCategories="() => (allCategoriesOpen = !allCategoriesOpen)"
      :toggleMarketSearch="() => (marketSearchOpen = !marketSearchOpen)"
    />
  </div>
  <div v-if="allCategoriesOpen || marketSearchOpen" class="overlay">
    <div v-if="allCategoriesOpen" class="categories-container">
      All Categories Content Here
    </div>

    <div v-if="marketSearchOpen" class="market-search-container">
      Market Search Content Here
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const allCategoriesOpen = ref(false);
const marketSearchOpen = ref(false);
</script>

<style>
.categories-container {
  position: absolute;
  width: 20%;
  height: 100vh;
  background: white;
  z-index: 10;
  top: 0;
  left: 0;
  border-radius: 0 10px 10px 0;
}

.market-search-container {
  position: absolute;
  width: 20%;
  background: white;
  z-index: 10;
  height: 100vh;
  top: 0;
  right: 0;
  border-radius: 10px 0 0 10px;
}

.overlay {
  position: absolute;
  width: 100%;
  background: rgba(0, 0, 0, 0.384);
  z-index: 20;
  height: 100vh;
  pointer-events: none;
  top: 0;
}
</style>
