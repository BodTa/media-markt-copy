import { addDoc, collection, getDocs } from "firebase/firestore";
import { defineStore } from "pinia";
import type SliderItem from "~/models/SliderItem";

export const useSliderItemStore = defineStore({
  id: "sliderItemStore",
  state: () => ({
    items: [] as SliderItem[],
  }),
  actions: {
    async getSliderItems() {
      const { $db } = useNuxtApp();

      const querySnapshot = await getDocs(collection($db, "sliderItems"));
      this.items = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as SliderItem[];
    },

    async addSliderItem(item: SliderItem) {
      const { $db } = useNuxtApp();

      const docRef = await addDoc(collection($db, "sliderItems"), item);

      this.items.push({ ...item, id: docRef.id });
    },
  },
});
