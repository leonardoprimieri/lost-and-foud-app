import Firebase from '../services/FirebaseConnection';

export function logOut() {
  localStorage.removeItem('uuid');
  Firebase.auth()
    .signOut()
    .then(() => {
      window.location.href = '/';
    });
}

export function isLogged() {
  let user = null;

  Firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      user = user.uid;
    } else {
      user = null;
    }
  });
  return user ? true : false;
}
