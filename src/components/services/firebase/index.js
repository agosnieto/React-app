import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWu7bb_BNaaHAWTvlUWrj77I4sMPkFWN0",
  authDomain: "hello-world-3d8d5.firebaseapp.com",
  projectId: "hello-world-3d8d5",
  storageBucket: "hello-world-3d8d5.appspot.com",
  messagingSenderId: "227852723113",
  appId: "1:227852723113:web:7400be479ab2a33a4fdab8"
};

const app = initializeApp(firebaseConfig);

export const firestoreBD= getFirestore(app)