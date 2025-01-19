import { defineStore } from 'pinia'
import { collection, getDocs } from 'firebase/firestore'
import { useNuxtApp } from '#app'
import type CategoryRecommendation from '~/models/categoryRecommendation'

export const useCategoryRecommendationStore = defineStore({
  id: 'categoryRecommendationStore',
  state: () => ({ categoryRecommendation: [] as CategoryRecommendation[] }),
  actions: {
    async fetchCategoryRecommendation() {
        const { $db } = useNuxtApp();
        const querySnapshot = await getDocs(collection($db, "categoryRecommendation"));
  
        this.categoryRecommendation = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as CategoryRecommendation[];
    }
  }
});