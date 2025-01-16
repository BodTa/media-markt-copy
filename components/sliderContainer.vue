<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import type SliderItem from "~/models/SliderItem";

const props = defineProps<{
  sliderItems: SliderItem[];
}>();

const currentIndex = ref(0);
const itemsPerPage = 3;
const showPageSelector = ref(false);
const intervalId = ref<number | null>(null);
const INTERVAL_DELAY = 5000; // 5 seconds

// Calculate total number of pages
const totalPages = computed(() =>
  Math.ceil(props.sliderItems.length / itemsPerPage)
);

// Get current page number (1-based)
const getCurrentPage = computed(
  () => Math.floor(currentIndex.value / itemsPerPage) + 1
);

// Get items for current page
const currentPageItems = computed(() => {
  const start = currentIndex.value;
  const end = Math.min(start + itemsPerPage, props.sliderItems.length);
  return props.sliderItems.slice(start, end);
});

// Navigation functions
const goPrev = () => {
  if (currentIndex.value >= itemsPerPage) {
    currentIndex.value -= itemsPerPage;
  }
};

const goNext = () => {
  if (currentIndex.value + itemsPerPage < props.sliderItems.length) {
    currentIndex.value += itemsPerPage;
  }
};

const goToPage = (pageIndex: number) => {
  currentIndex.value = pageIndex * itemsPerPage;
  showPageSelector.value = false;
};

// Auto-slide functionality
const startAutoSlide = () => {
  intervalId.value = window.setInterval(() => {
    if (currentIndex.value + itemsPerPage >= props.sliderItems.length) {
      currentIndex.value = 0; // Reset to start if at end
    } else {
      goNext();
    }
  }, INTERVAL_DELAY);
};

const stopAutoSlide = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<template>
  <div class="w-full h-full bg-white">
    <div
      class="w-full h-[80vh] flex justify-start items-center relative overflow-hidden"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <div class="absolute left-8 bottom-8 z-10">
        <div class="flex gap-2">
          <div
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page - 1)"
            class="w-8 h-1 rounded-full cursor-pointer"
            :class="getCurrentPage === page ? 'bg-gray-800' : 'bg-gray-300'"
          ></div>
        </div>
      </div>

      <div
        class="w-full h-[70vh] relative flex justify-start items-center px-12 overflow-hidden"
      >
        <div
          class="w-full h-[50vh] relative flex transition-transform duration-1000 ease-in-out gap-4"
          :style="{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }"
        >
          <div
            v-for="(item, index) in sliderItems"
            :key="index"
            class="h-full w-1/3 flex-shrink-0 flex flex-col justify-start items-center rounded-lg border border-gray-300 overflow-hidden"
          >
            <img
              :src="item.img"
              :alt="item.title"
              z
              class="h-3/5 w-full object-cover"
            />
            <div class="p-4 flex flex-col gap-2">
              <h2 class="text-xl font-bold">{{ item.title }}</h2>
              <span class="text-gray-600">{{ item.desc }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute right-8 bottom-8 flex gap-4">
        <button
          class="w-8 h-8 flex items-center justify-center rounded-[5%] bg-gray-800 text-white hover:bg-gray-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-2xl"
          @click="goPrev"
          :disabled="currentIndex === 0"
        >
          ‹
        </button>
        <button
          class="w-8 h-8 flex items-center justify-center rounded-[5%] bg-gray-800 text-white hover:bg-gray-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-2xl"
          @click="goNext"
          :disabled="currentIndex + itemsPerPage >= sliderItems.length"
        >
          ›
        </button>
      </div>
    </div>
  </div>
</template>
