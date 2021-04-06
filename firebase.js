import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB5AVvDQMKsOVrYdcNm0-ki9nc2yG_HE3Q",
    authDomain: "whatsapp-nextjs-37e01.firebaseapp.com",
    projectId: "whatsapp-nextjs-37e01",
    storageBucket: "whatsapp-nextjs-37e01.appspot.com",
    messagingSenderId: "142266092603",
    appId: "1:142266092603:web:226062fa51e8354381e01e"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new.firebase.auth.GoogleAuthProvider();

export { db, auth, provider };