import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyD7UsjiOvTwgOpA-6HaIc-XXUAFCcCOovA",
  authDomain: "studentperformance-f0918.firebaseapp.com",
  projectId: "studentperformance-f0918",
  storageBucket: "studentperformance-f0918.appspot.com",
  messagingSenderId: "921400033865",
  appId: "1:921400033865:web:d2dd23784c01c19c997598",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
