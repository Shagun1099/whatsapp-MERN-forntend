import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJfJrxCpgQM7sL91ltcsSqaElLScMH9w8",
  authDomain: "whatsapp-mern-byshagun.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-byshagun.firebaseio.com",
  projectId: "whatsapp-mern-byshagun",
  storageBucket: "whatsapp-mern-byshagun.appspot.com",
  messagingSenderId: "91812932169",
  appId: "1:91812932169:web:5ceb5075e52b7057576d98",
  measurementId: "G-6NREDGL4TQ"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;