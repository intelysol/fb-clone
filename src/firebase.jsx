import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCh3vkZlw4BKfuKshJuHMrgRliQd_-1j5A",
  authDomain: "facebook-clone-d095a.firebaseapp.com",
  databaseURL: "https://facebook-clone-d095a.firebaseio.com",
  projectId: "facebook-clone-d095a",
  storageBucket: "facebook-clone-d095a.appspot.com",
  messagingSenderId: "890744058884",
  appId: "1:890744058884:web:f2e432d6848eb9058df151",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
