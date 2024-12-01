<template>
  <div class="opportunities">
    <div class="opportunities-container">
      <div class="opportunity-item">
        <img src="/public/images/MobilUygulamamiziKesfedin.png" alt="" />
        <p class="opportunity-subtext">Mobil Uygulamamızı<br> Keşfedin!</p>
      </div>
      <div class="opportunity-item">
        <img src="/public/images/CLUBPuan.png" alt="" />
        <p class="opportunity-subtext">CLUB Puan</p>
        </div>
      <div class="opportunity-item">
        <img src="/public/images/IsBankasi.png" alt="" />
        <p class="opportunity-subtext">İş Bankası</p>
      </div>
      <div class="opportunity-item">
        <img src="/public/images/YapiKredi.png" alt="" />
        <p class="opportunity-subtext">Yapı Kredi</p>
      </div>
      <div class="opportunity-item">
        <img src="/public/images/9aVaranTaksitFirsati1.png" alt="" />
        <p class="opportunity-subtext">9'a Varan Taksit Fırsatı!</p>
      </div>
      <div class="opportunity-item">
        <img src="/public/images/9aVaranTaksitFirsati2.png" alt="" />
        <p class="opportunity-subtext">9'a Varan Taksit Fırsatı!</p>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup></script>

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
