import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAOcUvWeRF9yl9jl3-Gbn_PDWplR6oEp0w",
  authDomain: "social-react-b6485.firebaseapp.com",
  projectId: "social-react-b6485",
  storageBucket: "social-react-b6485.appspot.com",
  messagingSenderId: "595342357470",
  appId: "1:595342357470:web:2625d6603d680d4096634f",
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
// const firebaseStorage = firebase.storage()

// export { firebaseStorage }

export default firebaseApp
