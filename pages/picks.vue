<template>
  <div>
    <ourPicksForYou :picks="picksStore.picks" />
  </div>
</template>

<script lang="ts" setup>
import { useMyPicksStore } from '~/stores/picks'

const picksStore = useMyPicksStore();

onMounted(async () => {
  await picksStore.fetchPicks();
});
</script>
