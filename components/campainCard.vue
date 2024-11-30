<template>
  <div class="wrapper">
    <div class="campain-card">
      <div class="card-left">
        <div class="buttons">
          <button>Son Gün 2 Aralık</button>
          <button>App Özel 5 Kat CLUB Puan</button>
        </div>
        <h1 class="title">Şahane Cuma'nın Tam Zamanı!</h1>
      </div>
      <div class="card-right">
        <img
          crossorigin="anonymous"
          src="/public/images/campain.jpg"
          alt="Resmin açıklaması yok"
          loading="eager"
          fetchpriority="high"
        />
        <a
          href="https://www.mediamarkt.com.tr/tr/campaign/black-friday"
          class="buy-btn"
          >Alışverişe Başla I></a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.wrapper {
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
}
.campain-card {
  width: 80%;
  height: 40%;
  border: 0.8px rgb(184, 184, 184) solid;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.card-left {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-top: 1rem;
  padding-left: 1rem;
  gap: 1.5rem;
}
.buttons {
  height: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.3rem;
}
.card-right {
  width: 70%;
  height: 100%;
  object-fit: cover;
  position: relative;
}
.card-right > img {
  height: 100%;
  object-fit: cover;
}
.buttons > button {
  width: auto;
  padding: 0.3rem;
  font-size: x-small;
  border-radius: 5rem;
  color: black;
  border: 0.5px red solid;
}
.title {
  color: black;
  font-style: italic;
}
.buy-btn {
  position: absolute;
  z-index: 1;
  bottom: 5%;
  right: 25%;
  background: black;
  outline: none;
  border: none;
  border-radius: 5rem;
  color: white;
  padding: 0.5rem;
  font-weight: 600;
  font-size: large;
  text-decoration: none;
}
</style>
