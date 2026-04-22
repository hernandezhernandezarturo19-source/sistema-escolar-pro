const firebaseConfig = {
    apiKey: "AIzaSyBA9DHJkUHm-iY7ZN8DULHrvzsnTHp6FHo",
    authDomain: "sistema-escolar-pro-3ccd4.firebaseapp.com",
    projectId: "sistema-escolar-pro-3ccd4",
    storageBucket: "sistema-escolar-pro-3ccd4.firebasestorage.app",
    messagingSenderId: "991502018784",
    appId: "1:991502018784:web:02defd9d4a91e76b31c885"
  };
  
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
