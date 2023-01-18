import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyC7hQbnVhn-4CoRqjL9XFAGp1mJtJkLW08",
  authDomain: "foodpanda-f8615.firebaseapp.com",
  projectId: "foodpanda-f8615",
  storageBucket: "foodpanda-f8615.appspot.com",
  messagingSenderId: "679579849002",
  appId: "1:679579849002:web:9c11536c498f1dcc8c0e53"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export {
  auth,db,storage
}