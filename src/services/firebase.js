import firebase from "firebase/app";
import "firebase/database";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAdc-srAZ292S3a_c0Ecc1VDB-ybj3stCA",
  authDomain: "dive-manager-86bf0.firebaseapp.com",
  databaseURL: "https://dive-manager-86bf0.firebaseio.com",
  projectId: "dive-manager-86bf0",
  storageBucket: "dive-manager-86bf0.appspot.com",
  messagingSenderId: "42493055389"
};

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export const fireDataBase = firebase.database();

export const writeData = ({ userId, data }) => {
  return fireDataBase.ref(`users/${userId}`).set({
    ...data
  });
};

export const getData = (userId, pathToData = "") => {
  const ref = fireDataBase.ref(`users/${userId}/${pathToData}`);

  return new Promise((resolve, reject) => {
    try {
      ref.on("value", function(snapshot) {
        resolve(snapshot.val());
      });
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
};

export const logout = () => {
  return firebase.auth().signOut();
};

export const userLoginObserver = callback => {
  firebase.auth().onAuthStateChanged(callback);
};

export const userLogin = ({ username, password }) => {
  return firebase.auth().signInWithEmailAndPassword(username, password);
};

export const userRegister = ({ email, password }) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const updateUserProfie = ({ firstName, lastName }) => {
  /* Temporarily only two user info, will add more in account page */
  const user = firebase.auth().currentUser;

  return user.updateProfile({
    displayName: `${firstName} ${lastName}`
  });
};

export const sendEmailVerification = () => {
  const user = firebase.auth().currentUser;

  return user.sendEmailVerification();
};
