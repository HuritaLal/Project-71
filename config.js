import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  
      apiKey: "AIzaSyAWIPWDFE3J22uhgqm_lPqJlBmSmj3AJII",
      authDomain: "project-71-a44a3.firebaseapp.com",
      projectId: "project-71-a44a3",
      storageBucket: "project-71-a44a3.appspot.com",
      messagingSenderId: "774959518479",
      appId: "1:774959518479:web:f65f0728b9bd1b1dc1647a"
    
}
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

