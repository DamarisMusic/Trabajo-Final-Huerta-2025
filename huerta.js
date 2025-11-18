
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDmN4qBz3Aw5x7GO0Z-jB_viG6esOtbFVI",
    authDomain: "huertili-datini.firebaseapp.com",
    databaseURL: "https://huertili-datini-default-rtdb.firebaseio.com",
    projectId: "huertili-datini",
    storageBucket: "huertili-datini.firebasestorage.app",
    messagingSenderId: "675544360936",
    appId: "1:675544360936:web:e50313a4113bf99980265d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  let parrafo = document.querySelector("p");

const refDatos = ref(db, "huerta");

onValue(refDatos, (snapshot) => {
    console.log(snapshot.val())
    let huerta = snapshot.val()
    parrafo.textContent = `La huerta tiene una temperatura en el suelo de ${huerta.tempSuelo}° y de humedad de ${huerta.humSuelo}`
    
   
})
