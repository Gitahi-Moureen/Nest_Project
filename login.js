const loginForm = document.getElementById('login-form');

// attach event listener to the form
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // get html input values upon form submission
    let email = document.getElementById('email').value;
    let password1 = document.getElementById('password').value;

    // call firebase auth method

    firebase.auth().signInWithEmailAndPassword(email,password1)
    .then(function() {
        alert('Login Successful, redirecting....');
        window.location.assign('/user/dashboard.html');
    })
    .catch(function(err) {
        alert(err.message);
    })
})

// sign in with Google

// sign in with Google
const googleSignIn = document.getElementById('google-signin-btn');

googleSignIn.addEventListener('click', function() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleAuthProvider)
        .then(function() {
            window.location.assign('/user/dashboard.html');
        })
        .catch(function(err) {
            alert(err.message);
        })
})

// sign in with Github
const githubSignIn = document.getElementById('github-signin-btn');

githubSignIn.addEventListener('click', function() {
    const githubAuthProvider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(githubAuthProvider)
        .then(function() {
            window.location.assign('/user/dashboard.html');
        })
        .catch(function(err) {
            alert(err.message);
        })
})