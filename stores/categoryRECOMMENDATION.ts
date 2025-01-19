import { defineStore } from 'pinia'
import type CategoryRecommendation from '~/models/categoryRecommendation'
import { collection, getDocs } from 'firebase/firestore'

export const useCategoryRecommendationStore = defineStore({
    id: 'categoryRecommendationStore',
    state: () => ({ categoryRecommendation: [] as CategoryRecommendation[] }),
    actions: {
        async fetchCategoryRecommendation() {
            const { $db } = useNuxtApp();
            const querySnapshot = await getDocs(collection($db, "categoryRecommendation"));
            this.categoryRecommendation = querySnapshot.docs.map(doc => doc.data() as CategoryRecommendation);
        }
    }
})