<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4"
  >
    <div class="w-full max-w-md bg-white shadow-md rounded-md p-6">
      <h1 class="text-xl font-bold text-gray-800 mb-2">
        Yeni bir hesap oluşturun
      </h1>
      <p class="text-sm text-gray-600 mb-4">
        Avantajlardan yararlanmak için kayıt olun.
      </p>
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >E-posta adresi</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            placeholder="E-posta adresi"
            required
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Şifre</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            placeholder="Şifre"
            required
          />
        </div>
        <div v-if="authStore.error" class="text-red-600 text-sm">
          {{ authStore.error }}
        </div>
        <button
          type="submit"
          :disabled="authStore.loading"
          class="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
        >
          {{ authStore.loading ? "Kayıt Yapılıyor..." : "Kayıt Ol" }}
        </button>
      </form>
      <div class="mt-4 text-center">
        <NuxtLink
          to="/auth/login"
          class="text-sm text-gray-600 hover:text-black"
        >
          Zaten hesabınız var mı? Giriş yapın
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "nuxt/app";

const router = useRouter();
const email = ref("");
const password = ref("");
const authStore = useAuthStore();

const handleRegister = async () => {
  await authStore.register(email.value, password.value);

  if (!authStore.error && authStore.user) {
    await router.push("/");
  }
};

onMounted(() => {
  if (authStore.user) {
    router.push("/");
  }
});
</script>
