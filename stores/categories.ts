import { getDocs } from 'firebase/firestore';
import { defineStore } from 'pinia'
import type CategoryRecommendation from '~/models/categoryRecommendation';

export const useMyCategoriesStore = defineStore({
  id: 'myCategoriesStore',
  state: () => ({ }),
  actions: {
    async fetchPicks() {
      const { $db } = useNuxtApp();
      const querySnapshot = await getDocs(collection($db, "categoryRecommendation"));

      this.picks = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as CategoryRecommendation[];
  }
})
