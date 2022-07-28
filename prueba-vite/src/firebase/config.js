// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDZTARoOlNXD12FqSFibuiMheu-iMwUEVQ",
  authDomain: "cursoreact-6681e.firebaseapp.com",
  projectId: "cursoreact-6681e",
  storageBucket: "cursoreact-6681e.appspot.com",
  messagingSenderId: "902243956873",
  appId: "1:902243956873:web:5621f63d14eb770260ae58"
};

const app = initializeApp(firebaseConfig);

export default function iniFirebase(){
    return app
}