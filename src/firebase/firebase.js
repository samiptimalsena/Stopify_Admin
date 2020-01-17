import * as firebase from 'firebase/app'
import  'firebase/storage'
import 'firebase/firestore'

const app= firebase.initializeApp({
    apiKey: "AIzaSyDKBmvkie7F8AHWPUJDF0_7jw6if3lcEQY",
    authDomain: "ghar4257.firebaseapp.com",
    databaseURL: "https://ghar4257.firebaseio.com",
    projectId: "ghar4257",
    storageBucket: "ghar4257.appspot.com",
    messagingSenderId: "697451932919",
    appId: "1:697451932919:web:1fa0645571e726501a77f2",
    measurementId: "G-GVMYX7FVLS"
})

const storage=app.storage();
const storageRef=storage.ref();
const fireStore=app.firestore();
export {storageRef,fireStore,storage,app as default}