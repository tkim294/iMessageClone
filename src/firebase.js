import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDhmzK2rlofhJM5_bP6i6w-7l4PjVUCdGU",
    authDomain: "imessage-clone-5dbff.firebaseapp.com",
    projectId: "imessage-clone-5dbff",
    storageBucket: "imessage-clone-5dbff.appspot.com",
    messagingSenderId: "1097383470442",
    appId: "1:1097383470442:web:4cb08ec45fa529857db113"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;