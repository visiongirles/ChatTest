// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZUl9_pIiPMq19fvWZVy99Ah3lfPpUuoc',
  authDomain: 'react-chat-kate.firebaseapp.com',
  projectId: 'react-chat-kate',
  storageBucket: 'react-chat-kate.appspot.com',
  messagingSenderId: '465576004990',
  appId: '1:465576004990:web:f639f0e69a1c60b203f72f',
  measurementId: 'G-EGBSJZXPXB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
