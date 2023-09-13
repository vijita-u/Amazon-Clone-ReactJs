import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCnrZqgaoIqG5r7kw71tBwgRn6SEnCEJeg",
	authDomain: "clone-using-react-js-c2ec1.firebaseapp.com",
	projectId: "clone-using-react-js-c2ec1",
	storageBucket: "clone-using-react-js-c2ec1.appspot.com",
	messagingSenderId: "641554363945",
	appId: "1:641554363945:web:31fe4360fa2027f4714e38",
	measurementId: "G-G2P3RMS9KC",
};

// initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize db
const db = firebaseApp.firestore();

// authentication variable
const auth = firebase.auth();

export { db, auth };
