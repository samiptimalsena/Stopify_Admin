import React,{Component} from 'react'
import app from './firebase.js'
import 'firebase/auth'
import * as firebase from 'firebase/app'
import {Link} from 'react-router-dom'

class Direct extends Component{
    click=async()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        console.log("SIGNED IN")
        console.log(token)
        }).catch(function(error) {
            console.log(error)
            console.log("error") 
        });
        
    }
    render(){
        return(
            <div>
            <h1>Welcome to Stopify-Admin</h1>
            <p>Login to add Music</p>
            <button onClick={this.click} id='ttt'>
                <Link to='/'>
                    Google Login
                </Link>
                </button>
                </div>
        )
    }
}
export default Direct;
export const handleLogout=()=>{
    app.auth().signOut();
    console.log("LogOut")
}