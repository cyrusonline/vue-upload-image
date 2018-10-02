import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC2m5ur72lxbyLQ_nkZa9vUCx_saM6V_7A",
    authDomain: "vuefirestore-425e2.firebaseapp.com",
    databaseURL: "https://vuefirestore-425e2.firebaseio.com",
    projectId: "vuefirestore-425e2",
    storageBucket: "vuefirestore-425e2.appspot.com",
    messagingSenderId: "864658888501"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots:true})
  export default firebaseApp.firestore()