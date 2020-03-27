import * as firebase from 'firebase'
import  firebaseConfig from './firebaseConf'


// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase,googleAuthProvider, database as default}