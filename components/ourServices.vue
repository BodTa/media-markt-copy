<template>
  <div class="ourservices">
    <p class="ourservices-text">Hizmetlerimiz</p>
    <div class="ourservices-container">
      <div v-for="service in services" :key="service.id" class="ourservices-item">
        <img :src="service.image" alt="" />
        <p class="ourservices-subtext">{{ service.title }}</p>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  services: Service[]
}>()

</script>

<style>
.ourservices {
  padding: 16px;
  background-color: black;
}

.ourservices-text {
  padding: 20px;
  font-size: 40px;
  color: white;
}

.ourservices-item:hover {
  text-decoration: underline;
  text-decoration-color: white;
  border-radius: 10px;
  background-color: rgb(34, 34, 34);
}

.ourservices-subtext {
  text-align: center;
  font-size: 15px;
  color: white;
}

.ourservices-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
}

.ourservices-item > img {
  width: auto;
  height: 95px;
  padding: 20px;
}
</style>
