// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAaoi2jFiq3pmUTOFNugI293-ldOOBsaUI",
  authDomain: "serverless-quotes.firebaseapp.com",
  databaseURL: "https://serverless-quotes.firebaseio.com",
  projectId: "serverless-quotes",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const func = firebase.functions();
