<template>
  <div
    class="w-full min-h-screen overflow-y-auto bg-white flex justify-center items-start"
  >
    <div class="w-[80%] h-full flex flex-col justify-center items-center gap-8">
      <div class="w-full h-[60vh]"></div>
      <div
        v-if="sliderItemStore.items.length === 0"
        class="flex justify-center items-center h-screen"
      >
        <p class="text-xl text-gray-600">
          {{ JSON.stringify(sliderItemStore.items) }}
        </p>
      </div>
      <sliderContainer v-else :sliderItems="sliderItemStore.items" />
      <div class="w-full h-[150vh]"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sliderItemStore = useSliderItemStore();

onMounted(async () => {
  var items = await sliderItemStore.getSliderItems();
  console.log(items);
});
</script>

<style></style>
