import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyANoqD828Ckoe6wTuQ98lNrDZCmUEZ-X-c",
  authDomain: "linkedin-clone-c2c64.firebaseapp.com",
  projectId: "linkedin-clone-c2c64",
  storageBucket: "linkedin-clone-c2c64.appspot.com",
  messagingSenderId: "917881130890",
  appId: "1:917881130890:web:7a00acdf11ede3c1cb8273",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebaseApp.firestore();

export { auth, db };
