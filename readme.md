# Firebase Authenticator

Quickly authenticate with Firebase and receive an ID token for backend authentication testing.

# Setup

Create a new file called `cert.js` in `public` directory with your Firebase web credentials and run `node index` to start the server.

The app will be accessible from the browser at `http://localhost:4100`.

cert.js example:
```js
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
```
