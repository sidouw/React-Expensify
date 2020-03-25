import * as firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCi2YOjMR3t5fEtrO6XQ2B1fO8WmysDzbM",
    authDomain: "expensify-6ba8a.firebaseapp.com",
    databaseURL: "https://expensify-6ba8a.firebaseio.com",
    projectId: "expensify-6ba8a",
    storageBucket: "expensify-6ba8a.appspot.com",
    messagingSenderId: "490787300987",
    appId: "1:490787300987:web:136afbd8aede4748aae4de",
    measurementId: "G-S0F8E6GR02"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  firebase.database().ref().set({
      name:'sidah'
  })
  
  firebase.database().ref().update({
      name:'sidouw',
      job:'sepi',
      age:'19'
  })