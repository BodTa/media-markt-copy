import { getDocs, collection, addDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import type Campain from "~/models/Campain";
export const useMyCampainsStore = defineStore({
  id: "myCampainsStore",
  state: () => ({
    items: [] as Campain[],
  }),
  actions: {
    async getCampains() {
      const { $db } = useNuxtApp();

      const querySnapshot = await getDocs(collection($db, "campains"));
      this.items = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Campain[];
    },

    async addCampain(item: Campain) {
      const { $db } = useNuxtApp();

      const docRef = await addDoc(collection($db, "campains"), item);

      this.items.push({ ...item, id: docRef.id });
    },
  },
});
