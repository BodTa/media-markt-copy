<template>
  <div>
    <ourServices :services="servicesStore.services" />
  </div>
</template>

<script lang="ts" setup>
import { useServicesStore } from '~/stores/services'

const servicesStore = useServicesStore()
onMounted(async () => {
  await servicesStore.fetchServices()
})
</script>

<style>

</style>