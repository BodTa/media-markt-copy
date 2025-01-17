<script lang="ts" setup>
import type Offer from "~/models/Offer";

defineProps<{
  offers: Offer;
}>();
</script>

<template>
  <div class="w-full h-[70vh] flex flex-col justify-center items-start gap-12">
    <span class="text-black text-2xl font-extrabold">{{ offers.title }}</span>
    <div
      class="w-full h-[70%] grid grid-cols-2 text-white justify-center items-center"
    >
      <div
        v-for="item in offers.items"
        :key="item.id"
        class="w-full h-full relative flex justify-start items-start"
      >
        <div
          class="cursor-pointer w-2/3 h-full rounded-[5%] border-[0.5px] border-gray-500 relative"
        >
          <img
            :src="item.brandImg"
            class="absolute w-1/4 -translate-y-1/2 right-[5%] z-10 border border-black rounded-lg p-[0.3rem] bg-white overflow-hidden"
          />
          <div
            class="w-full h-[70%] relative flex flex-col justify-center items-center overflow-hidden"
          >
            <img
              crossorigin="anonymous"
              :src="item.img"
              :alt="item.title"
              loading="eager"
              fetchpriority="high"
              class="absolute w-[70%] z-10"
            />
            <img
              crossorigin="anonymous"
              src="https://cms-images.mmst.eu/2rj3gcd43pmw/Hs3U7pRIjwTYgKu4515sP/817a129115e12c7718a0963718000718/KW44-49_BlackNovember_Black_Deals_BG_900x600.png?fm=jpg&amp;q=88&amp;w=658"
              :alt="item.title"
              loading="eager"
              fetchpriority="high"
              class="object-cover w-full h-full rounded-t-[5%]"
            />
            <span
              class="p-[0.3rem] px-[0.6rem] bg-black absolute bottom-4 right-0 h-auto text-2xl font-extrabold italic"
            >
              ₺
              <!-- -->{{ item.price }},-</span
            >
          </div>
          <div
            class="w-full h-1/4 z-10 flex flex-col justify-center items-start p-2 gap-2"
          >
            <div
              class="w-full flex justify-start items-end gap-[0.3rem] pt-[5%]"
            >
              <button
                v-for="tag in item.tags"
                :key="tag"
                class="w-auto border border-[rgb(223,0,0)] bg-transparent text-gray-600 rounded-lg text-sm p-1"
              >
                {{ tag }}
              </button>
            </div>
            <span class="font-semibold text-lg text-black"
              >Stok: {{ item.stock }}</span
            >
            <span class="text-lg font-extrabold italic text-black">{{
              item.title
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
