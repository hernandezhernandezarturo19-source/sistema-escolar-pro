const firebaseConfig = {
apiKey:"TU_API_KEY",
authDomain:"TU_DOMINIO",
projectId:"TU_PROJECT_ID"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
