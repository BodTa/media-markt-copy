<template>
  <div class="productAdvert">
    <img class="urunilani" src="/public/images/Urunilani.png" alt="">
    <p>
      > <span class="Telefonn">Telefon</span>
      > <span class="Telefonn">Cep Telefonları</span>
      > <span class="Telefonn">iOS Telefonlar</span>
    </p>
  </div>
  <div class="productAdvert">
    <img style="width: 80px; height: auto;" src="/public/images/urunilaniyildiz.png" alt="">
    <span>5.0 (7) |   Ürün no. 1232435 | APPLE</span>,b
    <span>APPLE iPhone</span>
  </div>
  <div class="productAdvert">
    <span class="Apple">APPLE iPhone 15 128 GB Akıllı Telefon Siyah MTP03TU/A</span>
    <span style="position: absolute; margin-left: 980px; font-size: 40px; font-weight: bold;">₺ 51.229,</span>
  </div>
  <div class="productAdvert">
    <span class="Apple">Apple</span>
    <span style="position: absolute; margin-left: 1010px; margin-bottom: 10px; font-size: 12px; text-decoration: underline;">KDV dahil ücretsiz kargo</span>
    <span style="position: absolute; margin-left: 600px; font-size: 16px; font-weight: bold;">MediaMarkt CLUB Puanları</span>
    <span style="position: absolute; margin-left: 600px; margin-top: 40px; font-size: 14px; text-decoration: underline;">CLUB puanları hakkında daha fazla bilgi edinin</span>
  </div>
  <div class="productAdvert">
    
  </div>
  <div class="productAdvert">
    <span class="ability">Web'e Özel</span>
    <span class="ability">3000 TL Ek Destek</span>
    <span class="ability">App'e Özel 5 Kat Puan</span>
  </div>
  <div class="productAdvert">
    
  </div>
</template>

<script lang="ts" setup></script>

<style>
.productAdvert {
  display: flex;
  align-items: center;
  background-color: white;
}

.urunilani {
  padding-top: 16px;
  width: 30px;
  height: auto;
}

.ability {
  border: 2px solid red;
  text-align: center;
  border-radius: 20px;
  margin-left: 15px;
  margin-top: 10px;
  padding: 5px;
}

.Telefonn {
  text-decoration: underline;
  font-size: 16px;
  color: gray;
}

.Apple {
  padding-left: 20px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 16px;
}

.Telefonn:hover {
  text-decoration: none;
}
</style>
