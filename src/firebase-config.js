import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBH2w-2x7Yv8XO4s2gVfsjog_e21Wu9MLY",
    authDomain: "genshi-e650d.firebaseapp.com",
    projectId: "genshi-e650d",
    storageBucket: "genshi-e650d.appspot.com",
    messagingSenderId: "288337980743",
    appId: "1:288337980743:web:f81f183393f6ef20143062",
    measurementId: "G-T2FSZ2LB5B"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)