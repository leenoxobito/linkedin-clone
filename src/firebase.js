import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAv9pKrr6yMVba3iBWbXwTnqQFcbt_5s_0",
  authDomain: "linkedin-clone-42831.firebaseapp.com",
  projectId: "linkedin-clone-42831",
  storageBucket: "linkedin-clone-42831.appspot.com",
  messagingSenderId: "171460528393",
  appId: "1:171460528393:web:c1802cc8049402040d2bd8",
  measurementId: "G-X741G2REP5",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { auth, provider, storage };
export default db;
