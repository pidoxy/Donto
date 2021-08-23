import app from 'firebase/app';
import 'firebase/auth';

//  const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID,
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyB9Rz3orjsIYBx31ypdB93OyvxquQqbF6c",
    authDomain: "startmefund-457b1.firebaseapp.com",
    projectId: "startmefund-457b1",
    storageBucket: "startmefund-457b1.appspot.com",
    messagingSenderId: "201411771663",
    appId: "1:201411771663:web:84fe477b31c8ee3971127a",
    measurementId: "G-LG16CX2J62"
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();

    }

     // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  }
   
  export default Firebase;