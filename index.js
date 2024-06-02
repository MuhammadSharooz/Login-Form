import { auth,createUserWithEmailAndPassword,onAuthStateChanged  } from "./firebase.js";


let registerbtn=document.querySelector('#registerbtn')
let email=document.querySelector('.email')
let password=document.querySelector('.password')
let Username=document.querySelector('#Username')
let signUp = document.querySelector('.Sign-Up')
let logIn = document.querySelector('.login-box')


let register = ()=>{ 

  createUserWithEmailAndPassword( auth, email.value, password.value )
      .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    Swal.fire({
      position: "center",
      icon: "success",
      title: " You have Successfully registered ",
      showConfirmButton: false,
      timer: 1500
    }); 
      
     window.location.href = "index.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
      })

  });
}

registerbtn.addEventListener('click',register)  

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/auth.user
  // ...
} else {
  // No user is signed in.
}