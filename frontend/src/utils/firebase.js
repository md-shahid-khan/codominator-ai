import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "multi-agent-85a98.firebaseapp.com",
    projectId: "multi-agent-85a98",
    storageBucket: "multi-agent-85a98.firebasestorage.app",
    messagingSenderId: "593019355404",
    appId: "1:593019355404:web:85b135de199e2f66000929",
    measurementId: "G-JRSRP51WGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();