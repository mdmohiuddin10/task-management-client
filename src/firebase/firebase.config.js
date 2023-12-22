// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD62iUt3c67Dz5m0CwyT9vkTvZgAqqvHEg",
  authDomain: "task-management-client-87745.firebaseapp.com",
  projectId: "task-management-client-87745",
  storageBucket: "task-management-client-87745.appspot.com",
  messagingSenderId: "305031915378",
  appId: "1:305031915378:web:48b737af34790ec4735feb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;