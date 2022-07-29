import { getAuth,onAuthStateChanged, signOut   } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    let usuario=document.getElementById("usuario")
    //textContent para modificar en el html
    usuario.textContent="Bienvenido "+ user.email

    let salir= document.getElementById("salir")
    salir.classList.remove("invisible")

    let tienda=document.getElementById("tienda")
    tienda.classList.remove("invisible")
    // ...
  } else {
    let usuario=document.getElementById("usuario")
    usuario.textContent=""
  }
});
let botonsalir= document.getElementById("salir")
botonsalir.addEventListener("click", function () {
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href="index.html"
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

})