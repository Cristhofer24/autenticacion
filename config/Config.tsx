
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth} from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyDhH9YWiSAeChD9FYpKlTH3RG3d7yLTBqc",
  authDomain: "appprueba-f57de.firebaseapp.com",
  databaseURL: "https://appprueba-f57de-default-rtdb.firebaseio.com",
  projectId: "appprueba-f57de",
  storageBucket: "appprueba-f57de.appspot.com",
  messagingSenderId: "928333993002",
  appId: "1:928333993002:web:1920412aa028abf1de5f53"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
 export const storage = getStorage(app);