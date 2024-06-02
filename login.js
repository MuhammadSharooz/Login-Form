import { auth,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail,onAuthStateChanged  } from "./firebase.js";

let email=document.querySelector('#email')
let password=document.querySelector('#password')
let Username=document.querySelector('#Username')
let loginbtn=document.querySelector('#logIn')
let rememberpassword=document.querySelector('#remember')




let userEmail=document.querySelector('#userEmail')


// Login page

let login = ()=>{

signInWithEmailAndPassword(auth, email.value, password.value,Username.value)
  .then((userCredential) => {
    const user = userCredential.user;  
    console.log(user)
    let userprofile = document.querySelector('.user-profile')
    let logIn = document.querySelector('.login-box')
    Swal.fire({
      position: "center",
      icon: "success",
      title: " You have Successfully login ",
      showConfirmButton: true,
      timer: 1500
    });
        logIn.style.display="none"
        userprofile.style.display="flex"
        document.title="User Profile"
        userEmail.innerHTML=auth.currentUser.email;
          console.log(userEmail.innerHTML)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (error.message === "Firebase: Error (auth/invalid-credential).") {
      Swal.fire({
       icon: "error",
       title: "Oops...",
       text: "There is no user corresponding to this email address.",
      });
     }
   else if (errorCode == 'auth/invalid-email') {
     Swal.fire({
       icon: "error",
       title: "Oops...",
       text: errorMessage,
      });
   } 
     else if (errorCode == 'auth/missing-password') {
       Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "Enter your Password",
        });
        
     }
    console.log(errorCode,errorMessage)
  });
 


}

loginbtn.addEventListener("click",login)


// Forgot Password


let forgotbtn =document.querySelector('.forgot')
let forgotpassword = ()=>{
  sendPasswordResetEmail(auth, email.value)
  .then(() => {
    console.log("Password reset email sent!")
    Swal.fire({
      icon: "question",
      title: "Password reset email sent",
      text: "Please check your email to reset your password",
    })

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    Swal.fire({
       icon: "error",
       title: "Oops...",
       text: errorMessage,
     });
    console.log("error ===>", error);    
  });

}
forgotbtn.addEventListener("click",forgotpassword)

// rememberpassword.

onAuthStateChanged(auth, (user) => {

  if (user) {
    const uid = user.uid;
    console.log(uid)
  } else {
    console.log("sign in out")
  }
});
let remember = () =>{
  onAuthStateChanged(auth, (user) => {

  if (user) {
    const uid = user.uid;
    console.log(uid)
  } else {
    console.log("sign in out")
  }
});
}

rememberpassword.addEventListener("click",remember)




// userprofile page



const verifiedEmail = document.querySelector('#verifiedEmail')
const verified = document.querySelector('#verified')
 
verifiedEmail.addEventListener("click",()=>{
  sendEmailVerification(auth.currentUser) 
  
     
 .then(() => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Verification email sent",
    showConfirmButton: true
  });
  verified.innerHTML="Your email successfully  verified"
})

.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log("error ===>", error);
  

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: errorMessage,
  });



});
})



// logout

let logout = document.querySelector('#logout')
logout.addEventListener("click",()=>{
  auth.signOut()
  .then(() => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have Successfully logout",
      showConfirmButton: true,
      timer: 1500
    });
    let userprofile = document.querySelector('.user-profile')
    let logIn = document.querySelector('.login-box')
    let email=document.querySelector('#email')
    let password=document.querySelector('#password')
    userprofile.style.display="none"
    logIn.style.display="flex"
    document.title="Login"
    email.value="";
    password.value="";
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
})