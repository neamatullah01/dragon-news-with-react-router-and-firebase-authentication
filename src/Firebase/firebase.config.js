// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ4W0b5BA17Ut2pA3-eiU4hu8MNBNfnY0",
  authDomain: "dragon-news-with-react-r-65e2e.firebaseapp.com",
  projectId: "dragon-news-with-react-r-65e2e",
  storageBucket: "dragon-news-with-react-r-65e2e.firebasestorage.app",
  messagingSenderId: "836936076539",
  appId: "1:836936076539:web:9ddbcc9185c86a64cd745e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;