import { defineStore } from 'pinia'
import type Pick from '~/models/Pick'
import { collection, getDocs, addDoc } from 'firebase/firestore'

export const useMyPicksStore = defineStore({
  id: 'myPicksStore',
  state: () => ({ picks: [] as Pick[] }),
  actions: {
    async fetchPicks() {
      const { $db } = useNuxtApp();
      const querySnapshot = await getDocs(collection($db, "picks"));

      this.picks = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Pick[];
    },

/*    async addPick(pick: Pick) {
      const { $db } = useNuxtApp()
      const picksCollection = collection($db, 'picks')
      const docRef = await addDoc(picksCollection, pick)
      this.picks.push({
        ...pick,
        id: docRef.id
      })
    }*/
  }
})