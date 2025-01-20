import { defineStore } from "pinia";
import type { Auth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as null | { uid: string; email: string },
    error: null as null | string,
    loading: false,
  }),
  actions: {
    async register(email: string, password: string) {
      this.loading = true;
      this.error = null;

      try {
        const { $auth } = useNuxtApp();
        if (!$auth) throw new Error("Firebase auth is not initialized");

        const userCredential = await createUserWithEmailAndPassword(
          $auth as Auth,
          email,
          password
        );
        this.user = {
          uid: userCredential.user.uid,
          email: userCredential.user.email!,
        };
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async login(email: string, password: string) {
      this.loading = true;
      this.error = null;

      try {
        const { $auth } = useNuxtApp();
        if (!$auth) throw new Error("Firebase auth is not initialized");

        const userCredential = await signInWithEmailAndPassword(
          $auth as Auth,
          email,
          password
        );
        this.user = {
          uid: userCredential.user.uid,
          email: userCredential.user.email!,
        };
      } catch (error: any) {
        this.error = error.message;
        this.user = null;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      this.loading = true;
      this.error = null;

      try {
        const { $auth } = useNuxtApp();
        if (!$auth) throw new Error("Firebase auth is not initialized");

        await signOut($auth as Auth);
        this.user = null;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});