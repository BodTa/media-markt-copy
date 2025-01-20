<template>
    <div class="login-container">
      <div class="login-box">
        <h1 class="login-title">
          MediaMarkt CLUB üyesi misiniz?
        </h1>
        <p class="login-subtitle">
          MediaMarkt CLUB üyeliğinin tüm avantajlarından yararlanmak için şimdi
          giriş yapın.
        </p>
        <form @submit.prevent="handleLogin" class="login-form">
          <div>
            <label for="email" class="form-label">E-posta adresi</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="form-input"
              placeholder="E-posta adresi"
              required
            />
          </div>
          <div>
            <label for="password" class="form-label">Şifre</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="form-input"
              placeholder="Şifre"
              required
            />
          </div>
          <button
            type="submit"
            :disabled="authStore.loading"
            class="submit-button"
            :class="{ 'button-disabled': authStore.loading }"
          >
            {{ authStore.loading ? "Giriş yapılıyor..." : "Giriş yap" }}
          </button>
        </form>
        <div v-if="authStore.error" class="error-message">
          {{ authStore.error }}
        </div>
        <div class="register-link-container">
          <NuxtLink
            to="/auth/register"
            class="register-link"
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

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  padding: 0 1rem;
}

.login-box {
  width: 100%;
  max-width: 28rem;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  padding: 1.5rem;
}

.login-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.login-subtitle {
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.form-input {
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.form-input:focus {
  outline: none;
  border-color: black;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}

.submit-button {
  width: 100%;
  background-color: black;
  color: white;
  padding: 0.5rem 0;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #1f2937;
}

.button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.register-link-container {
  margin-top: 1rem;
  text-align: center;
}

.register-link {
  font-size: 0.875rem;
  color: #4b5563;
  text-decoration: none;
}

.register-link:hover {
  color: black;
}
</style>