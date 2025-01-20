<template>
    <div class="register-container">
      <div class="register-box">
        <h1 class="register-title">
          Yeni bir hesap oluşturun
        </h1>
        <p class="register-subtitle">
          Avantajlardan yararlanmak için kayıt olun.
        </p>
        <form @submit.prevent="handleRegister" class="register-form">
          <div>
            <label for="email" class="form-label">E-posta adresi</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="form-input"
              placeholder="E-posta adresi"
              required
            />
          </div>
          <div>
            <label for="password" class="form-label">Şifre</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="form-input" 
              placeholder="Şifre"
              required
            />
          </div>
          <div v-if="authStore.error" class="error-message">
            {{ authStore.error }}
          </div>
          <button
            type="submit"
            :disabled="authStore.loading"
            class="submit-button"
            :class="{ 'button-disabled': authStore.loading }"
          >
            {{ authStore.loading ? "Kayıt Yapılıyor..." : "Kayıt Ol" }}
          </button>
        </form>
        <div class="login-link-container">
          <NuxtLink
            to="/auth/login"
            class="login-link"
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

  <style scoped>
  .register-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f3f4f6;
    padding: 0 1rem;
  }

  .register-box {
    width: 100%;
    max-width: 28rem;
    background-color: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-radius: 0.375rem;
    padding: 1.5rem;
  }

  .register-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .register-subtitle {
    font-size: 0.875rem;
    color: #4b5563;
    margin-bottom: 1rem;
  }

  .register-form {
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
  }

  .form-input:focus {
    outline: none;
    border-color: black;
    box-shadow: 0 0 0 1px black;
  }

  .error-message {
    color: #dc2626;
    font-size: 0.875rem;
  }

  .submit-button {
    width: 100%;
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
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

  .login-link-container {
    margin-top: 1rem;
    text-align: center;
  }

  .login-link {
    font-size: 0.875rem;
    color: #4b5563;
    text-decoration: none;
  }

  .login-link:hover {
    color: black;
  }
  </style>