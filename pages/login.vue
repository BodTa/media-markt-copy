<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4"
  >
    <div class="w-full max-w-md bg-white shadow-md rounded-md p-6">
      <h1 class="text-xl font-bold text-gray-800 mb-2">
        MediaMarkt CLUB üyesi misiniz?
      </h1>
      <p class="text-sm text-gray-600 mb-4">
        MediaMarkt CLUB üyeliğinin tüm avantajlarından yararlanmak için şimdi
        giriş yapın.
      </p>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >E-posta adresi</label
          >
          <input
            v-model="email"
            type="email"
            id="email"
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
            v-model="password"
            type="password"
            id="password"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            placeholder="Şifre"
            required
          />
        </div>
        <button
          type="submit"
          :disabled="authStore.loading"
          class="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
        >
          {{ authStore.loading ? "Giriş yapılıyor..." : "Giriş yap" }}
        </button>
      </form>
      <div v-if="authStore.error" class="text-red-500 text-sm mt-2">
        {{ authStore.error }}
      </div>
      <div class="mt-4 text-center">
        <NuxtLink
          to="/auth/register"
          class="text-sm text-gray-600 hover:text-black"
        >
          Hesabınız yok mu? Kayıt olun
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
const authStore = useAuthStore();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  await authStore.login(email.value, password.value);

  if (!authStore.error && authStore.user) {
    await router.push("/"); // Redirect to home page after successful login
  }
};

// Redirect if already logged in
onMounted(() => {
  if (authStore.user) {
    router.push("/");
  }
});
</script>
