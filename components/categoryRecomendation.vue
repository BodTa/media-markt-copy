<template>
  <div class="category-recommendations">
    <div class="category-container">
      <div class="category-item">
        <img src="/public/images/CepTelefonlari.png" alt="" />
        <p class="category-subtext">Cep Telefonları</p>
      </div>
      <div class="category-item">
        <img src="/public/images/Bilgisayarlar.png" alt="" />
        <p class="category-subtext">Bilgisayarlar</p>
        </div>
      <div class="category-item">
        <img src="/public/images/BeyazEsya.png" alt="" />
        <p class="category-subtext">Beyaz Eşya</p>
      </div>
      <div class="category-item">
        <img src="/public/images/KucukEvAletleri.png" alt="" />
        <p class="category-subtext">Küçük Ev Aletleri</p>
      </div>
      <div class="category-item">
        <img src="/public/images/Supurgeler.png" alt="" />
        <p class="category-subtext">Süpürgeler</p>
      </div>
      <div class="category-item">
        <img src="/public/images/Televizyonlar.png" alt="" />
        <p class="category-subtext">Televizyonlar</p>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup></script>

<style>
.category-recommendations {
  padding: 16px;
  background-color: black;
}

.category-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
}

.category-subtext {
  text-align: center;
  font-size: 15px;
  color: rgb(156, 156, 156);
}

.category-item:hover {
  text-decoration: underline;
  text-decoration-color: white;
  border-radius: 10px;
  background-color: rgb(34, 34, 34);
}
</style>
