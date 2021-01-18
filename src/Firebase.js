import  firebase from 'firebase'



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcnpfrimteyXBmuLow1buU_TKJAJVKVqU",
    authDomain: "tree4me-652b1.firebaseapp.com",
    projectId: "tree4me-652b1",
    storageBucket: "tree4me-652b1.appspot.com",
    messagingSenderId: "400758728342",
    appId: "1:400758728342:web:03fd434ca48db0d52b84b7",
    measurementId: "G-HM45JE465B"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 
export default db;
export {auth,provider};
