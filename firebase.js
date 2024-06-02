import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js'

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,
  sendPasswordResetEmail ,onAuthStateChanged 
 } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBAsR3tJU6T0vRrvkh4yxI2d3QQPlQ9uhI",
  authDomain: "sing-up-and-log-in-form.firebaseapp.com",
  projectId: "sing-up-and-log-in-form",
  storageBucket: "sing-up-and-log-in-form.appspot.com",
  messagingSenderId: "140429028430",
  appId: "1:140429028430:web:a2f49516412bbf1cd3271f"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail ,
    onAuthStateChanged 
}