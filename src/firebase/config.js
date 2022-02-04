import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDkr-FbFaQ6Me-wlbn7bm9BIaGBMUM47RY",
    authDomain: "my-money-bd908.firebaseapp.com",
    projectId: "my-money-bd908",
    storageBucket: "my-money-bd908.appspot.com",
    messagingSenderId: "429546977883",
    appId: "1:429546977883:web:2a705daed240220a465d7e"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };