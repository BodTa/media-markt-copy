import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyB8Cg2KmFETPdbJGrfDfPrYZmdLCScOjQ0",
    authDomain: "media-markt-copy.firebaseapp.com",
    projectId: "media-markt-copy",
    storageBucket: "media-markt-copy.firebasestorage.app",
    messagingSenderId: "967526906965",
    appId: "1:967526906965:web:8eece654283167f76d68dc",
    measurementId: "G-EMBMYLVL0H",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return {
    provide: {
      firebaseApp: app,
      db,
    },
  };
});

const { $db } = useNuxtApp();
