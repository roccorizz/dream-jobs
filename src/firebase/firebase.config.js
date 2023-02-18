// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJC7bpqRVOVz1YSbIvhjdH2rliFykcZTc",
    authDomain: "dream-jobs-f9d3d.firebaseapp.com",
    projectId: "dream-jobs-f9d3d",
    storageBucket: "dream-jobs-f9d3d.appspot.com",
    messagingSenderId: "805097447948",
    appId: "1:805097447948:web:3081ff8bc1c3ebde70c429"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;