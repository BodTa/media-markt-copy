<template>
  <div class="ourservices">
    <p class="ourservices-text">Hizmetlerimiz</p>
    <div class="ourservices-container">
      <div class="ourservices-item">
        <img src="/public/images/MagazadanTeslimAl.png" alt="" />
        <p class="ourservices-subtext">Mağazadan Teslim Al</p>
      </div>
      <div class="ourservices-item">
        <img src="/public/images/UcretsizKargo.png" alt="" />
        <p class="ourservices-subtext">Ücretsiz Kargo</p>
        </div>
      <div class="ourservices-item">
        <img src="/public/images/KolayIade.png" alt="" />
        <p class="ourservices-subtext">Kolay İade</p>
      </div>
      <div class="ourservices-item">
        <img src="/public/images/AlisverisKredisi.png" alt="" />
        <p class="ourservices-subtext">Alışveriş Kredisi</p>
      </div>
      <div class="ourservices-item">
        <img src="/public/images/OnarimKurulumAriza.png" alt="" />
        <p class="ourservices-subtext">Onarım/Kurulum/Arıza</p>
      </div>
      <div class="ourservices-item">
        <img src="/public/images/HediyeKartiBakiyeniz.png" alt="" />
        <p class="ourservices-subtext">Hediye Kartı Bakiyeniz</p>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup></script>

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
