<template>
    <div>
        <Opportunities :opportunities="opportunitiesStore.opportunities" />
    </div>
</template>

<script lang="ts" setup>
import Opportunities from '~/components/opportunities.vue'
import { useOpportunitiesStore } from '~/stores/Opportunity'

const opportunitiesStore = useOpportunitiesStore()

opportunitiesStore.fetchOpportunities()

onMounted(() => {
    opportunitiesStore.fetchOpportunities()
})
</script>