import * as firebase from 'firebase';

//insert config from firebase
const config = {
  apiKey: "AIzaSyCBWujIE_o4jbOws0ZLglyQntfy4BwDQPE",
  authDomain: "review-game-53e79.firebaseapp.com",
  databaseURL: "https://review-game-53e79.firebaseio.com",
  projectId: "review-game-53e79",
  storageBucket: "review-game-53e79.appspot.com",
  messagingSenderId: "857560658329"
  };
firebase.initializeApp(config);

export default firebase;