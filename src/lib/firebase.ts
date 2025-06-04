
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx0t5M9QRPQoRBaMDtDUmGICCX8r_k2nw",
  authDomain: "astre-f93d3.firebaseapp.com",
  databaseURL: "https://astre-f93d3-default-rtdb.firebaseio.com",
  projectId: "astre-f93d3",
  storageBucket: "astre-f93d3.firebasestorage.app",
  messagingSenderId: "175273255912",
  appId: "1:175273255912:web:f2da15b4b4a32064a3fa5d",
  measurementId: "G-5X6K01L2Z0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth, analytics };
