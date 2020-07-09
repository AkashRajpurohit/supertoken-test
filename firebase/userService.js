const firebase = require("firebase/app");
require("firebase/auth");

const apiKey = 'AIzaSyB7bAuUPHTrCwQ6ldjbr-p-kr3Jxkbsh2c';
const fb = firebase.initializeApp({
  apiKey: apiKey,
});

exports.addUser = (email, password) =>
  fb.auth().createUserWithEmailAndPassword(email, password);

exports.authenticate = (email, password) =>
  fb.auth().signInWithEmailAndPassword(email, password);