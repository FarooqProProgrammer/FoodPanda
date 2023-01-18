import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyAEgX81VqSYK_Bv_68JD6-uMvx-3iwK2nU",
  authDomain: "fir-1-28c92.firebaseapp.com",
  projectId: "fir-1-28c92",
  storageBucket: "fir-1-28c92.appspot.com",
  messagingSenderId: "396709616771",
  appId: "1:396709616771:web:0364caad53de25096e8fb6"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export {
  auth,db,storage
}