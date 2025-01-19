<template>
  <div class="opportunities">
    <div class="opportunities-container">
      <div v-for="opportunity in opportunitiesStore.opportunities" :key="opportunity.id" class="opportunity-item">
        <img :src="opportunity.image" alt="" />
        <p class="opportunity-subtext">{{ opportunity.title }}</p>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { useOpportunitiesStore } from '~/stores/Opportunity'
const opportunitiesStore = useOpportunitiesStore()

opportunitiesStore.fetchOpportunities()
</script>

<style>
.opportunities {
  padding: 16px;
  background-color: black;
}

.opportunities-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
}

.opportunity-item:hover {
  text-decoration: underline;
  text-decoration-color: white;
  border-radius: 10px;
  background-color: rgb(34, 34, 34);
}

.opportunity-item > img {
  width: 160px;
  height: auto;
}

.opportunity-subtext {
  text-align: center;
  font-size: 15px;
  color: rgb(156, 156, 156);
}
</style>
