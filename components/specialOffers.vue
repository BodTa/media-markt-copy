<template>
  <div class="container">
    <span class="title">Şahane Cuma Özel Teklifler</span>
    <div class="reccomendation-container">
      <div class="rec-card-wrapper" :style="{ position: 'relative' }">
        <img src="/public/images/brand.webp" class="card-brand" />
        <div class="rec-card">
          <div class="card-main">
            <picture class="card-img"
              ><img
                crossorigin="anonymous"
                src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_147652314/fee_786_587_png"
                alt="Resmin açıklaması yok"
                loading="eager"
                fetchpriority="high"
            /></picture>

            <picture class="card-bg"
              ><source
                media="(max-width: 511px)"
                srcset="
                  https://cms-images.mmst.eu/2rj3gcd43pmw/Hs3U7pRIjwTYgKu4515sP/817a129115e12c7718a0963718000718/KW44-49_BlackNovember_Black_Deals_BG_900x600.png?fm=jpg&amp;q=88&amp;w=495
                " />
              <source
                media="(max-width: 751px)"
                srcset="
                  https://cms-images.mmst.eu/2rj3gcd43pmw/Hs3U7pRIjwTYgKu4515sP/817a129115e12c7718a0963718000718/KW44-49_BlackNovember_Black_Deals_BG_900x600.png?fm=jpg&amp;q=88&amp;w=690
                " />
              <source
                media="(max-width: 1007px)"
                srcset="
                  https://cms-images.mmst.eu/2rj3gcd43pmw/Hs3U7pRIjwTYgKu4515sP/817a129115e12c7718a0963718000718/KW44-49_BlackNovember_Black_Deals_BG_900x600.png?fm=jpg&amp;q=88&amp;w=456
                " />
              <img
                crossorigin="anonymous"
                src="https://cms-images.mmst.eu/2rj3gcd43pmw/Hs3U7pRIjwTYgKu4515sP/817a129115e12c7718a0963718000718/KW44-49_BlackNovember_Black_Deals_BG_900x600.png?fm=jpg&amp;q=88&amp;w=658"
                alt="ALTUS 10kg Yoğuşmalı Kurutma Makinesi"
                loading="eager"
                fetchpriority="high"
            /></picture>
            <span class="card-price text"
              >₺
              <!-- -->15.499,-</span
            >
          </div>
          <div class="card-description">
            <div class="des-buttons">
              <button>3 Taksit</button>
              <button>App'e Özel 5 Puan</button>
            </div>
            <span :style="{ fontWeight: 600, fontSize: 'large' }"
              >Stok: 70</span
            >
            <span class="card-title">Altus 10KG Yoğumalı Kurutma Makinesi</span>
          </div>
        </div>
      </div>
      <div class="rec-card-wrapper" :style="{ position: 'relative' }">
        <img src="/public/images/brand.webp" class="card-brand" />
        <div class="rec-card">
          <div class="card-main">
            <picture class="card-img"
              ><img
                crossorigin="anonymous"
                src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_147652488/fee_786_587_png"
                alt="Resmin açıklaması yok"
                loading="eager"
                fetchpriority="high"
            /></picture>
            <picture class="card-bg"
              ><source
                media="(max-width: 511px)"
                srcset="
                  https://cms-images.mmst.eu/2rj3gcd43pmw/Hs3U7pRIjwTYgKu4515sP/817a129115e12c7718a0963718000718/KW44-49_BlackNovember_Black_Deals_BG_900x600.png?fm=jpg&amp;q=88&amp;w=495
                " />
              <source
                media="(max-width: 751px)"
                srcset="
                  https://cms-images.mmst.eu/2rj3gcd43pmw/Hs3U7pRIjwTYgKu4515sP/817a129115e12c7718a0963718000718/KW44-49_BlackNovember_Black_Deals_BG_900x600.png?fm=jpg&amp;q=88&amp;w=690
                " />
              <source
                media="(max-width: 1007px)"
                srcset="
                  https://cms-images.mmst.eu/2rj3gcd43pmw/Hs3U7pRIjwTYgKu4515sP/817a129115e12c7718a0963718000718/KW44-49_BlackNovember_Black_Deals_BG_900x600.png?fm=jpg&amp;q=88&amp;w=456
                " />
              <img
                crossorigin="anonymous"
                src="https://cms-images.mmst.eu/2rj3gcd43pmw/Hs3U7pRIjwTYgKu4515sP/817a129115e12c7718a0963718000718/KW44-49_BlackNovember_Black_Deals_BG_900x600.png?fm=jpg&amp;q=88&amp;w=658"
                alt="ALTUS 10kg Yoğuşmalı Kurutma Makinesi"
                loading="eager"
                fetchpriority="high"
            /></picture>
            <span class="card-price text"
              >₺
              <!-- -->12.299,-</span
            >
          </div>
          <div class="card-description">
            <div class="des-buttons">
              <button>3 Taksit</button>
              <button>App'e Özel 5 Puan</button>
            </div>
            <span :style="{ fontWeight: 600, fontSize: 'medium' }"
              >Stok: 70</span
            >
            <span class="card-title">Altus 10KG Yoğumalı Kurutma Makinesi</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: black;
  overflow: hidden;
  padding-left: 4rem;
}
.title {
  color: white;
  font-size: x-large;
  font-weight: 1000;
}
.reccomendation-container {
  width: 100%;
  height: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  color: white;
  justify-content: center;
  align-items: center;
}
.rec-card-wrapper {
  width: 80%;
  height: 90%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: start;
}
.rec-card {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 5%;
  border: 0.5px solid gray;
  overflow-x: hidden;
  position: relative;
  background-color: black;
}

.card-main {
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-img {
  overflow: hidden;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-img > img {
  width: 70%;
}
.card-bg {
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  z-index: 0;
}
.card-brand {
  position: absolute;
  width: 25%;
  transform: translateY(-50%);
  right: 5%;
  z-index: 2;
  overflow: visible;
  border: 1px black solid;
  border-radius: 0.5rem;
  padding: 0.3rem;
  background: white;
  overflow: hidden;
}
.card-description {
  width: 100%;
  height: 25%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0.5rem;
  gap: 0.5rem;
}
.des-buttons {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 0.3rem;
  padding-top: 5%;
}
.des-buttons > button {
  width: auto;
  border: rgb(223, 0, 0) solid 0.5px;
  background-color: transparent;
  color: rgb(155, 155, 155);
  border-radius: 0.5rem;
  font-size: smaller;
}

.card-price {
  padding: 0.3rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  background-color: black;
  position: absolute;
  bottom: 25%;
  right: 0;
  height: auto;
}
.card-title {
  font-size: larger;
  font-weight: 1000;
  font-style: italic;
}
.text {
  font-size: xx-large;
  font-weight: 1000;
  font-style: italic;
}
</style>
