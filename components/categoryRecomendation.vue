<template>
  <div class="category-recommendations">
    <div class="category-container">
      <div v-for="category in categoryRecommendationStore.categoryRecommendation" :key="category.id" class="categoryy-item">
        <img :src="category.image" alt="" />
        <p class="category-subtext">{{ category.title }}</p>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { useCategoryRecommendationStore } from '~/stores/categoryRECOMMENDATION'

const categoryRecommendationStore = useCategoryRecommendationStore()

categoryRecommendationStore.fetchCategoryRecommendation()
</script>

<style>
.category-recommendations {
  padding: 16px;
  background-color: black;
}

.category-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
}

.category-subtext {
  text-align: center;
  font-size: 15px;
  color: rgb(208, 208, 208);
}

.categoryy-item > img {
  width: 160px;
  height: auto;
}

.categoryy-item:hover {
  text-decoration: underline;
  text-decoration-color: white;
  border-radius: 10px;
  background-color: rgb(34, 34, 34);
}
</style>
