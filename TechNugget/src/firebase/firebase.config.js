import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLEO-ZuTp0M3CGDvwoNv2T5xnxEMcMoJQ",
  authDomain: "tech-nugget.firebaseapp.com",
  projectId: "tech-nugget",
  storageBucket: "tech-nugget.appspot.com",
  messagingSenderId: "804935147323",
  appId: "1:804935147323:web:3a6441c8518cbb85cca11e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
