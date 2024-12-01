<script lang="ts" setup>
import { ref } from "vue";

const sliderItems = ref([
  {
    img: new URL("/public/images/kurumsal-1.jpg", import.meta.url).href,
    title: "Kurumsal Hediye Kartı",
    desc: "Mediamarkt Kurumsal hediye kartı ile çalışanlarınızı ve ortaklarınızı mutlu edin.",
    link: "https://www.mediamarkt.com.tr/tr/specials/kurumsal-hediye-karti",
  },
  {
    img: new URL("/public/images/kurumsal-2.jpg", import.meta.url).href,
    title: "Mediamarkt Kurumsal Kiralama Hizmeti",
    desc: "Gelişen teknoloji ile birlikte ihtiyaç duyduğunuz en yeni cep telefonlarını, en uygun ödeme seçenekleriyle kiralayın.",
    link: "/tr/specials/kurumsal-kiralama-hizmeti",
  },
  {
    img: new URL("/public/images/kurumsal-3.jpg", import.meta.url).href,
    title: "Apple'ın gücü. İş yerinde",
    desc: "Apple donanımları, yazılımları ve servisleri birlikte çalışarak çalışanlara nerede olurlarsa olsunlar her türlü görevin üstesinden gelme gücü ve esnekliği sağlar.",
    link: "/tr/specials/kurumsal-satis-apple",
  },
  {
    img: new URL("/public/images/kurumsal-4.jpg", import.meta.url).href,
    title: "Kurumsal müşteri olarak kaydolun",
    desc: "Kayıt işleminiz tamamlandıktan sonra sizinle en kısa sürede iletişime geçeceğiz.",
    link: "https://www.mediamarkt.com.tr/tr/b2b-kayit",
  },
]);

const currentIndex = ref(0);
const itemsPerPage = 3;

const goPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const goNext = () => {
  if (currentIndex.value + itemsPerPage < sliderItems.value.length) {
    currentIndex.value++;
  }
};
</script>

<template>
  <div class="slider-page">
    <div class="slider-container">
      <div class="slider">
        <div
          class="slider-item-container"
          :style="{
            transform: `translateX(-${currentIndex * 38}%)`,
          }"
        >
          <div
            v-for="(item, index) in sliderItems"
            :key="index"
            class="slider-item"
          >
            <img class="slider-img" :src="item.img" :alt="item.title" />
            <div class="slider-desc-container">
              <a class="slider-link" :href="item.link" target="_self">
                <h2 class="slider-title">{{ item.title }}</h2>
              </a>
              <span class="slider-desc">{{ item.desc }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-buttons">
        <button
          class="slider-button"
          @click="goPrev"
          :disabled="currentIndex === 0"
        >
          ‹
        </button>
        <button
          class="slider-button"
          @click="goNext"
          :disabled="currentIndex + itemsPerPage >= sliderItems.length"
        >
          ›
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.slider-page {
  width: 100%;
  height: 100%;
  background: white;
}
.slider-container {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.slider {
  width: auto;
  height: 70vh;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
}
.slider-item-container {
  width: 200vw;
  height: 50vh;
  position: relative;
  display: flex;
  transition: 1s ease-in-out;
  overflow-x: visible;
  gap: 3rem;
  padding: 3rem;
}

.slider-item {
  height: 100%;
  width: 23vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 5%;
  border: 1px rgb(161, 160, 160) solid;
  overflow: hidden;
}

.slider-img {
  height: 60%;
  object-fit: cover;
}

.slider-desc-container {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-left: 1rem;
}
.slider-link {
  color: black;
  text-decoration: none;
  font-style: italic;
}
.slider-desc {
  font-size: small;
  width: 90%;
}
.slider-buttons {
  position: absolute;
  bottom: 0;
  left: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.slider-button {
  font-size: large;
  font-weight: 600;
  outline: none;
  border: none;
  padding: 0.5rem;
  border-radius: 5%;
  aspect-ratio: square;
  width: 32px;
  cursor: pointer;
}

.slider-button:enabled {
  background: #000;
  color: white;
}
.slider-button:disabled {
  background: #d3d2d2;
  color: rgb(151, 151, 151);
}

.slider-button:enabled:hover {
  background: #797979;
}
</style>
