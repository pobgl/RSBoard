import firebase from 'firebase/app';
import 'firebase/auth';

export default function toggleSignIn() {
  const user = firebase.auth().currentUser;
  if (user) {
    firebase.auth().signOut();
  } else {
    const email = document.getElementById('signInEmail');
    const password = document.getElementById('signInPassword');
    const emailValue = email.value;
    const passwordValue = password.value;

    if (emailValue.length < 4) {
      console.log('Please enter an email address.');
      return;
    }

    if (passwordValue.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
      .then((response) => console.log(response))
      .catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementById('signInBtn').disabled = false;
      });
  }
  document.getElementById('signInBtn').disabled = true;
}
