
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1zf576_W-KR_eHWXSP3Y7zkBxEpjmSvw",
  authDomain: "simon-pixel.firebaseapp.com",
  projectId: "simon-pixel",
  storageBucket: "simon-pixel.appspot.com",
  messagingSenderId: "286778439607",
  appId: "1:286778439607:web:f7696f1626534e25141a32"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app