import app from './firebase.js'
import 'firebase/auth'
import * as firebase from 'firebase/app'


export const googleLogin= async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;
        console.log("SIGNED IN")
        console.log(token)
    }).catch(function (error) {
        console.log(error)
        console.log("error")
    });
}

export const handleLogout = () => {
    app.auth().signOut();
    console.log("LogOut")
}

export const registerWithEmail=(data)=>{
    app.auth().createUserWithEmailAndPassword(data.email,data.password).then(()=>{console.log("Registered")})
    .catch((err)=>{
        console.log(err);
        alert(err.message)
    })
}

export const loginWithEmail=(data)=>{
    app.auth().signInWithEmailAndPassword(data.email,data.password).then(()=>{console.log("Logged in")})
    .catch((err)=>{
        console.log(err);
        alert(err.message)
    })
}
