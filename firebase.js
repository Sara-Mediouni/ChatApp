// Import the functions you need from the SDKs you need
import  App from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCAEr9OWlN0krN0EGeDV4gA5LbjOJ7RWU",
  authDomain: "chatapp-102bd.firebaseapp.com",
  projectId: "chatapp-102bd",
  storageBucket: "chatapp-102bd.appspot.com",
  messagingSenderId: "949148343030",
  appId: "1:949148343030:web:509a555187cc2a366d6ad7"
};
const initfirebase=App.initializeApp(firebaseConfig);
export default initfirebase;