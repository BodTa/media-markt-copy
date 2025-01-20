<template>
  <div class="container">
    <div class="button-container">
      <NuxtLink to="/opportunities" class="link-button red">
        <button>Fırsatlar</button>
      </NuxtLink>

      <NuxtLink to="/categories" class="link-button blue">
        <button>Kategoriler</button>
      </NuxtLink>

      <NuxtLink to="/categoryRecommendation" class="link-button green">
        <button>Kategori Önerileri</button>
      </NuxtLink>

      <NuxtLink to="/picks" class="link-button purple">
        <button>Senin için Önerilenler</button>
      </NuxtLink>

      <NuxtLink to="/services" class="link-button gray">
        <button>Servislerimiz</button>
      </NuxtLink>

      <NuxtLink to="/login" class="link-button orange">
        <button>Giriş Yap</button>
      </NuxtLink>

      <NuxtLink to="/register" class="link-button teal">
        <button>Kayıt Ol</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 1rem;
}

.link-button {
  padding: 0.75rem 1.5rem;
  color: white;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
}

.link-button.red {
  background-color: #dc2626;
}

.link-button.red:hover {
  background-color: #b91c1c;
}

.link-button.blue {
  background-color: #2563eb;
}

.link-button.blue:hover {
  background-color: #1d4ed8;
}

.link-button.green {
  background-color: #16a34a;
}

.link-button.green:hover {
  background-color: #15803d;
}

.link-button.purple {
  background-color: #9333ea;
}

.link-button.purple:hover {
  background-color: #7e22ce;
}

.link-button.gray {
  background-color: #4b5563;
}

.link-button.gray:hover {
  background-color: #374151;
}

.link-button.orange {
  background-color: #ea580c;
}

.link-button.orange:hover {
  background-color: #c2410c;
}

.link-button.teal {
  background-color: #0d9488;
}

.link-button.teal:hover {
  background-color: #0f766e;
}
</style>