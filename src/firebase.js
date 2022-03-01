// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXNfS8FCUMXP7brrWfQFlAEeae8aZ2L-k",
  authDomain: "three-peace-app.firebaseapp.com",
  projectId: "three-peace-app",
  storageBucket: "three-peace-app.appspot.com",
  messagingSenderId: "306966533979",
  appId: "1:306966533979:web:43fdac1ed7424f969eac7e",
  measurementId: "G-5M95X58RB8",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
