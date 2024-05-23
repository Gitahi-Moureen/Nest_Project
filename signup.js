
import * as firebase from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiI-xI43Dcwh7z2NVf1qq2momiLu94Xmg",
    authDomain: "nest-project-d94e0.firebaseapp.com",
    projectId: "nest-project-d94e0",
    storageBucket: "nest-project-d94e0.appspot.com",
    messagingSenderId: "890482460597",
    appId: "1:890482460597:web:48a40ee317f7b13b433bfc",
    measurementId: "G-L039555WVW"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);


const signUpForm = document.getElementById('signup-form');

const auth = getAuth(app)

// attach event listener to the form
signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // get html input values upon form submission
    let fullName = document.getElementById('firstname').value;
    let email = document.getElementById('email').value;
    let password1 = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    // check if pass1 = pass 2 before proceeding with signup

    if (password1 === password2) {
        // call firebase authetication
        createUserWithEmailAndPassword(auth, email, password1)
            .then(function (response) {
                console.log({response});
                firebase.auth().currentUser.sendEmailVerification();
                firebase.auth().currentUser.updateProfile({ displayName: fullName })
                alert('Sign Up Successful, redirecting....');
                window.location.assign('index.html');
            })
            .catch(function (err) {
                alert(err.message);
            })
    } else {
        alert('Passwords do not match')
    }
})