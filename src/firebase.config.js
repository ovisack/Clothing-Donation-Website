// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMk-ED3sLISKNBsaLtgiyjDBe3r1pHxNA",
  authDomain: "assignment-9-10bh-e38f9.firebaseapp.com",
  projectId: "assignment-9-10bh-e38f9",
  storageBucket: "assignment-9-10bh-e38f9.firebasestorage.app",
  messagingSenderId: "514995176831",
  appId: "1:514995176831:web:0e459503cd2e72d1f0064a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;