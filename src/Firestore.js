import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBLgEfwjzbKSvmon8d29j_KiwLZuUQMtc8",
  authDomain: "portfolio-larsgp.firebaseapp.com",
    databaseURL: "https://portfolio-larsgp.firebaseio.com",
  projectId: "portfolio-larsgp",
  storageBucket: "",
  messagingSenderId: "675698678861"
});

export const db = firebaseApp.firestore();