<script lang="ts" setup>
import type Campain from "~/models/Campain";

defineProps<{
  campain: Campain;
}>();
</script>

<template>
  <div
    class="w-[80vw] relative h-[50vh] border border-gray-300 rounded-2xl flex justify-center items-center overflow-hidden"
  >
    <div
      class="w-[35%] h-full flex flex-col justify-start items-center pt-12 pl-4 gap-6"
    >
      <div
        class="h-auto flex justify-start items-start gap-1 absolute top-4 left-2"
      >
        <button
          v-for="tag in campain.tags"
          :key="tag"
          class="px-3 py-1 text-xs rounded-full text-black border border-red-500"
        >
          {{ tag }}
        </button>
      </div>
      <h1 class="text-black italic font-extrabold text-3xl font-sans">
        {{ campain.title }}
      </h1>
    </div>
    <div class="w-[70%] h-full object-cover relative">
      <img
        crossorigin="anonymous"
        :src="campain.img"
        :alt="campain.title"
        loading="eager"
        fetchpriority="high"
        class="w-full h-full object-cover"
      />
      <a
        :href="campain.link"
        class="absolute z-10 bottom-[5%] right-1/4 bg-black rounded-full text-white py-2 px-4 font-semibold text-lg no-underline flex items-center gap-2"
        >Alışverişe Başla <span class="text-xl">&gt;</span></a
      >
    </div>
  </div>
</template>

<style></style>
