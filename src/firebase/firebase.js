import * as firebase from 'firebase/app'
import  'firebase/storage'
import 'firebase/firestore'

const app=firebase.initializeApp({
    apiKey:  "AIzaSyDyVwvz3K-QBehn9HEa161q9ACFQU8ohj0",
    authDomain:  "auth-a3c8b.firebaseapp.com",
    databaseURL:  "https://auth-a3c8b.firebaseio.com",
    projectId:  "auth-a3c8b",
    storageBucket:  "auth-a3c8b.appspot.com",
    messagingSenderId:  "233330622166",
    appId:  "1:233330622166:web:b0374f262ccaf0c46f1377"
  
})

const storage=app.storage();
const storageRef=storage.ref();
const fireStore=app.firestore();




export {storageRef,fireStore,storage,app as default}