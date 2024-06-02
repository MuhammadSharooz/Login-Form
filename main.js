

let signUp = document.querySelector('.Sign-Up')
let logIn = document.querySelector('.login-box')
let email=document.querySelector('#email')
let password=document.querySelector('#password')
let Username=document.querySelector('#Username')
let showPassword=document.querySelector('#showPass')
function signPage(){
    logIn.style.display="none"
    signUp.style.display="flex"
    document.title="Sign Up"
    Username.value="";
    password.value="";
    email.value="";

}
function login(){       
    logIn.style.display="flex"
    signUp.style.display="none" 
    document.title="Login Page"
    password.value="";
    email.value="";
    Username.value=""

}

