<template>
  <div class="w-full h-auto flex flex-col justify-center items-start">
    <div class="w-full h-[25vh]"></div>
    <div
      class="w-full h-auto flex flex-col justify-center items-start gap-y-12"
    >
      <div
        v-for="campain in campainsStore.items"
        :key="campain.id"
        class="w-full h-full flex justify-center items-center gap-4"
      >
        <campainCard :campain="campain" />
      </div>
    </div>
    <div class="w-full h-[70vh]"></div>
  </div>
</template>

<script lang="ts" setup>
import campainCard from "~/components/campainCard.vue";
import { useMyCampainsStore } from "~/stores/campains";

const campainsStore = useMyCampainsStore();

onMounted(async () => {
  await campainsStore.getCampains();
});
</script>

<style></style>
