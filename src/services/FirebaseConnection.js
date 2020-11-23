import firebase from 'firebase';
import firebaseConfig from '../services/Firebase';
import 'firebase/storage';

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();

export default firebase;
