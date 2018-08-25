import firebase from "firebase/app";
import "firebase/database";
import API from "./apiCredentials";

const { FIREBASE_CONFIG } = API;

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export const fireDataBase = firebase.database();

export const writeData = ({ userId, data }) =>
  fireDataBase.ref(`users/${userId}`).set({
    ...data
  });

export const getData = (userId, pathToData = "") => {
  const ref = fireDataBase.ref(`users/${userId}/${pathToData}`);

  return new Promise((resolve, reject) => {
    try {
      ref.on("value", snapshot => {
        resolve(snapshot.val());
      });
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
};

export const logout = () => firebase.auth().signOut();

export const userLoginObserver = callback => {
  firebase.auth().onAuthStateChanged(callback);
};

export const userLogin = ({ username, password }) =>
  firebase.auth().signInWithEmailAndPassword(username, password);

export const userRegister = ({ email, password }) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

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
