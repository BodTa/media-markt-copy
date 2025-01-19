<template>
  <div>
    <NavigationBar />
    <NuxtPage />
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
import OurPicksForYou from "./components/ourPicksForYou.vue";
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
