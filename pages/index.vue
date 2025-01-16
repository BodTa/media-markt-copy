<template>
  <div class="w-full h-screen flex flex-col items-center justify-center">
    <div class="flex items-center justify-center min-h-screen gap-4">
      <NuxtLink
        to="/navbar"
        class="px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
      >
        Navbar Page
      </NuxtLink>

      <NuxtLink
        to="/slider"
        class="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Slider Page
      </NuxtLink>

      <NuxtLink
        to="/campain"
        class="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
      >
        Campaign Page
      </NuxtLink>

      <NuxtLink
        to="/specialOffer"
        class="px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Special Offers Page
      </NuxtLink>

      <NuxtLink
        to="/footer"
        class="px-6 py-3 text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
      >
        Footer Page
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
