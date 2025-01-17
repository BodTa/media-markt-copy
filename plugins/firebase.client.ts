import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export default defineNuxtPlugin((nuxtApp) => {

const firebaseConfig = {
  apiKey: "AIzaSyDhFsMv3SCR6h6CUbVF8ek6f6aYikz4DoQ",
  authDomain: "mediamarkt-copy.firebaseapp.com",
  projectId: "mediamarkt-copy",
  storageBucket: "mediamarkt-copy.firebasestorage.app",
  messagingSenderId: "504052683406",
  appId: "1:504052683406:web:80296569566bcbca906fdf",
  measurementId: "G-9PCP9QC76S"
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
