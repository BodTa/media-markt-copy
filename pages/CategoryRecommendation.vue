<template>
    <div>
        <CategoryRecommendation :categoryRecommendation="categoryRecommendationStore.categoryRecommendation" />
    </div>
</template>

<script lang="ts" setup>
import { useCategoryRecommendationStore } from '~/stores/categoryRECOMMENDATION';
import CategoryRecommendation from '~/components/categoryRecomendation.vue';
const categoryRecommendationStore = useCategoryRecommendationStore();
categoryRecommendationStore.fetchCategoryRecommendation();

onMounted(() => {
    categoryRecommendationStore.fetchCategoryRecommendation();
})
</script>