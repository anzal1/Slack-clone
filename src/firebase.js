import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBEy-T__sbxJ7l9GF3vYSMrVzFLsooeRSI",
  authDomain: "slack-clone-30c59.firebaseapp.com",
  projectId: "slack-clone-30c59",
  storageBucket: "slack-clone-30c59.appspot.com",
  messagingSenderId: "1033596060845",
  appId: "1:1033596060845:web:a2ce86efad4a79f6037224",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
