


// const firebaseConfig = firebase.initialize({})

const firebaseConfig = {
  apiKey: "AIzaSyCBtziR4oVj0rX-SfKKaGawBG6B4-9PDn0",
  authDomain: "todoist-c043b.firebaseapp.com",
  databaseURL: "https://todoist-c043b.firebaseio.com",
  projectId: "todoist-c043b",
  storageBucket: "todoist-c043b.appspot.com",
  messagingSenderId: "421898793575",
  appId: "1:421898793575:web:ed67a0f52f565ee97b5ac2",
  measurementId: "G-D2QDDNGWGY"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export { firebaseConfig as firebase};