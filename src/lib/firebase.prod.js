import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAwDnT-4IK11zi0v6babPRhrBzm-2Jrm7M',
  authDomain: 'netflix-71f05.firebaseapp.com',
  projectId: 'netflix-71f05',
  storageBucket: 'netflix-71f05.appspot.com',
  messagingSenderId: '886983571953',
  appId: '1:886983571953:web:854a35394ebd4a1e3eac50',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
