<template>
  <div class="home">
    <div class="sidebar">
      <button class="sidebar-button" @click="updateState(0)">
        Navigation Bar
      </button>
      <button class="sidebar-button" @click="updateState(1)">
        Özel Teklifler
      </button>
      <button class="sidebar-button" @click="updateState(2)">Footer</button>
      <button class="sidebar-button" @click="updateState(3)">Kampanya</button>
      <button class="sidebar-button" @click="updateState(4)">Slider</button>
      <button class="sidebar-button" @click="updateState(5)">
        Tüm kategoriler
      </button>
      <button class="sidebar-button" @click="updateState(6)">
        Hizmetlerimiz
      </button>
      <button class="sidebar-button" @click="updateState(7)">Fırsatlar</button>
      <button class="sidebar-button" @click="updateState(8)">
        Kategori önerileri
      </button>
      <button class="sidebar-button" @click="updateState(9)">Sizin İçin Seçtiklerimiz</button>
      <span>current index: {{ state }}</span>
    </div>

    <!-- Taner'in Yapıcakları -->
    <div class="main-section" v-if="state === 0">
      <NavigationBar />
    </div>
    <div class="main-section" v-if="state === 1">
      <SpecialOffers />
    </div>
    <div class="main-section" v-if="state === 2">
      <Footer />
    </div>
    <div class="main-section" v-if="state === 3">
      <CampainCard />
    </div>
    <div class="main-section" v-if="state === 4">
      <Slider />
    </div>

    <!-- Alican'ın Yapıcakları -->
    <div class="main-section" v-if="state === 5">
      <AllCategories />
    </div>
    <div class="main-section" v-if="state === 6">
      <OurServices />
    </div>
    <div class="main-section" v-if="state === 7">
      <Opportunities />
    </div>
    <div class="main-section" v-if="state === 8">
      <CategoryRecomendation />
    </div>
    <div class="main-section" v-if="state === 9">
      <OurPicksForYou />
    </div>
  </div>
</template>

<script>
import("./style.css");
import NavigationBar from "./components/navigationBar.vue";
import AllCategories from "./components/allCategories.vue";
import CategoryRecomendation from "./components/categoryRecomendation.vue";
import Footer from "./components/footer.vue";
import Slider from "./components/slider.vue";
import Opportunities from "./components/opportunities.vue";
import OurServices from "./components/ourServices.vue";
import ProductAdvert from "./components/ourPicksForYou.vue";
import CampainCard from "./components/campainCard.vue";
import SpecialOffers from "./components/specialOffers.vue";
export default {
  data() {
    return {
      state: 0,
    };
  },
  methods: {
    updateState(index) {
      this.state = index;
    },
  },
};
</script>
