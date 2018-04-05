(function () {

  firebase.initializeApp(config);

})();

function facebookLogin() {

  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
  .then(result => {

    return result.user.getIdToken();

  })
  .then(token => {

    const output = document.getElementById('token');

    output.value = token;

  })
  .catch(error => {

    console.error(error);

  });

}

function googleLogin() {

  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then(result => {

    return result.user.getIdToken();

  })
  .then(token => {

    const output = document.getElementById('token');

    output.value = token;

  })
  .catch(error => {

    console.error(error);

  });

}

function copyToClipboard() {

  const output = document.getElementById('token');

  output.select();
  document.execCommand('Copy');

}
