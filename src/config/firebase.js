import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDap086FfMyYcNLHq4sjSvilK6Ltd4MRWs",
    authDomain: "homevent-3e0c6.firebaseapp.com",
    databaseURL: "https://homevent-3e0c6.firebaseio.com",
    projectId: "homevent-3e0c6",
    storageBucket: "homevent-3e0c6.appspot.com",
    messagingSenderId: "738482365401",
    appId: "1:738482365401:web:304ef3ac798a3ffa712fc8",
};

export default firebase.initializeApp(firebaseConfig);
