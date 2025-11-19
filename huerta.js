
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
  const db = getDatabase();


  // Botones
  const btnHumedadSuelo = document.getElementById("btnHumedadSuelo");
  const btnHumedadAire = document.getElementById("btnHumedadAire");
  const btnTempAire = document.getElementById("btnTempAire");


  // Elementos donde se muestran los datos\const humedadSueloBox = document.getElementById("humedadSuelo");
  const humedadAireBox = document.getElementById("humedadAire");
  const tempAireBox = document.getElementById("tempAire");


  // Funciones para obtener datos
  function obtenerDato(rutaFirebase, elementoHTML, texto) {
  const ruta = ref(db, rutaFirebase);
  get(ruta).then((snapshot) => {
  if (snapshot.exists()) {
  elementoHTML.innerText = `${texto}: ${snapshot.val()}`;
  } else {
  elementoHTML.innerText = "No hay datos disponibles.";
  }
  });
  }


  // Eventos de los botones
  btnHumedadSuelo.addEventListener("click", () => {
  obtenerDato("sensores/humedad_suelo", humedadSueloBox, "Humedad del Suelo");
  });


  btnHumedadAire.addEventListener("click", () => {
  obtenerDato("sensores/humedad_aire", humedadAireBox, "Humedad del Aire");
  });


  btnTempAire.addEventListener("click", () => {
  obtenerDato("sensores/temperatura_aire", tempAireBox, "Temperatura del Aire");
  });


