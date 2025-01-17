<template>
  <div class="w-full h-auto flex flex-col justify-center items-center">
    <div
      v-for="offer in offersStore.items"
      :key="offer.id"
      class="w-[80%] h-auto flex flex-col justify-center items-center gap-12"
    >
      <specialOffers :offers="offer" />
      <div class="w-full h-[70vh]"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMyOffersStore } from "~/stores/offers";

const offersStore = useMyOffersStore();

onMounted(async () => {
  await offersStore.getOffers();

  console.log(offersStore.items);
});
</script>

<style></style>
