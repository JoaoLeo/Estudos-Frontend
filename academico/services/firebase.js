import { initializeApp, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

let app;
try {
  app = getApp()
} catch(err){
  
  const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSASING_SENDER_ID,
  appId: process.env.APP_ID,
};


 app = initializeApp(firebaseConfig);
}

const db = getDatabase(app);

export { db }
