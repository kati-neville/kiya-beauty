// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	//@ts-ignore
	apiKey: import.meta.env.VITE_FIREBASE_KEY,
	authDomain: "kiya-beauty.firebaseapp.com",
	projectId: "kiya-beauty",
	storageBucket: "kiya-beauty.appspot.com",
	messagingSenderId: "1045385725280",
	appId: "1:1045385725280:web:b064dbb34b4bb042b44a05",
	measurementId: "G-C43GELRK16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
