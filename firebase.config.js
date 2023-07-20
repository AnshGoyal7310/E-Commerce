import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdQSi-7B22dSHWUmfjd6t385lBJ7x5N7U",
  authDomain: "yt-restaurant-app.firebaseapp.com",
  databaseURL: "https://yt-restaurant-app-default-rtdb.firebaseio.com",
  projectId: "yt-restaurant-app",
  storageBucket: "yt-restaurant-app.appspot.com",
  messagingSenderId: "491910479372",
  appId: "1:491910479372:web:e3e62ec0fa5c376d75b829",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
