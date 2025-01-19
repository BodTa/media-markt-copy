<template>
  <div class="w-full h-screen flex flex-col items-center justify-center">
    <div class="flex items-center justify-center min-h-screen gap-4">
      <NuxtLink
        to="/opportunities"
        class="px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
      >
        <button>Fırsatlar</button>
      </NuxtLink>

      <NuxtLink
        to="/categories"
        class="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <button>Kategoriler</button>
      </NuxtLink>

      <NuxtLink
        to="/categoryRecommendation"
        class="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
      >
        <button>Kategori Önerileri</button>
      </NuxtLink>

      <NuxtLink
        to="/picks"
        class="px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
      >
        <button>Senin için Önerilenler</button>
      </NuxtLink>

      <NuxtLink
        to="/services"
        class="px-6 py-3 text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <button>Servislerimiz</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>