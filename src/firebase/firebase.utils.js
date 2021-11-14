import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCN7cWzy4u1V8fd6tQGSOdpDygp9J2CL24',
  authDomain: 'zth-r-e.firebaseapp.com',
  projectId: 'zth-r-e',
  storageBucket: 'zth-r-e.appspot.com',
  messagingSenderId: '180890798238',
  appId: '1:180890798238:web:e5a196b6b3d17f9832d38f',
  measurementId: 'G-R0EBFW4RZ4',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
