import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyAn7omstmvr7OHUjs2CkAo-N1SNJhzcKZE",
  authDomain: "foodpand-2.firebaseapp.com",
  projectId: "foodpand-2",
  storageBucket: "foodpand-2.appspot.com",
  messagingSenderId: "440240145214",
  appId: "1:440240145214:web:e4a1294c996183a82fa26f"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export {
  auth,db,storage
}