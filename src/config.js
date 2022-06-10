import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyBsMXq4l2KQDKHEcB356K5O0mY24WC3T90",
    authDomain: "lexicalminimum.firebaseapp.com",
    databaseURL: "https://lexicalminimum-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lexicalminimum",
    storageBucket: "lexicalminimum.appspot.com",
    messagingSenderId: "494411586982",
    appId: "1:494411586982:web:5cd721fd16cff5b7c3c367",
    measurementId: "G-T3JT704E9D"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
