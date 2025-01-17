import { addDoc, collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { defineStore } from "pinia";
import type Offer from "~/models/Offer";
import type OfferItem from "~/models/OfferItem";

export const useMyOffersStore = defineStore({
  id: "myOffersStore",
  state: () => ({
    items: [] as Offer[],
  }),
  actions: {
    async getOffers() {
      const { $db } = useNuxtApp();

      const querySnapshot = await getDocs(collection($db, "offers"));
      const offers = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Offer[];

      for (const offer of offers) {
        const itemsSnapshot = await getDocs(
          collection($db, `offers/${offer.id}/items`)
        );
        offer.items = itemsSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as OfferItem[];
      }

      this.items = offers;
    },

    async addOffer(offer: Offer) {
      const { $db } = useNuxtApp();

      const docRef = await addDoc(collection($db, "offers"), {
        title: offer.title,
      });

      for (const item of offer.items) {
        await addDoc(collection($db, `offers/${docRef.id}/items`), {
          title: item.title,
          tags: item.tags,
          img: item.img,
          price: item.price,
          stock: item.stock,
          brandImg: item.brandImg,
        });
      }

      this.items.push({ ...offer, id: docRef.id });
    },
  },
});
