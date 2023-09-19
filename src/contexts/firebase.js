import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0HEqX6ftWk8kCZoVyxpTgTXOGFU2mfs8",
  authDomain: "groceryaa-f74ac.firebaseapp.com",
  projectId: "groceryaa-f74ac",
  storageBucket: "groceryaa-f74ac.appspot.com",
  messagingSenderId: "159854254453",
  appId: "1:159854254453:web:e27dc31f6ec7f3378e1b3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
