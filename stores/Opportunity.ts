import { defineStore } from 'pinia'
import type Opportunities from '~/models/OPPORTUNITIES'
import { collection, getDocs } from 'firebase/firestore'
import { useNuxtApp } from '#app'

export const useOpportunitiesStore = defineStore({
    id: 'opportunitiesStore',
    state: () => ({ opportunities: [] as Opportunities[] }),
    actions: {
        async fetchOpportunities() {
            const { $db } = useNuxtApp();
            const querySnapshot = await getDocs(collection($db, "opportunities"));
            this.opportunities = querySnapshot.docs.map(doc => doc.data() as Opportunities);
        }
    }
})