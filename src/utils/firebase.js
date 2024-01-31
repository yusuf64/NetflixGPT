// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCunFpoYC2foqF-z51bzqHpbVhf9NZqCGA",
  authDomain: "netflixgpt-e5cd6.firebaseapp.com",
  projectId: "netflixgpt-e5cd6",
  storageBucket: "netflixgpt-e5cd6.appspot.com",
  messagingSenderId: "850723812883",
  appId: "1:850723812883:web:589a3f6291042f5e3071e6",
  measurementId: "G-YKJ8LD9FJB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
