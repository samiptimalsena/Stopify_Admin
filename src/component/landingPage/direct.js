import React,{Component} from 'react'
import app from '../../firebase/firebase.js'
import 'firebase/auth'
import * as firebase from 'firebase/app'
import {Link} from 'react-router-dom'
import './direct.css'


import Paper from '@material-ui/core/Paper'
import {Typography} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Logo from '../../images/spotify-admin.png'


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
            
            
            <Paper className={"paper"} square>
                
              <AppBar position='static' style={{backgroundColor:"black"}}>
                <Toolbar>
                      <img src={Logo} style={{height:"30px"}} alt="Logo"/>
                      <a href="https://stopify.netlify.com/">
                      <button className={"link_button"} style={{fontSize:"100px"}}><Typography >
                          Go to Stopify
                          </Typography></button></a>
                      </Toolbar>
              </AppBar>
              <Typography variant='h3' className={"title"} >
                Welcome to Stopify-Admin
              </Typography>
              <button className={"login"} onClick={this.click} ><Typography ><Link to='/'>Google Login</Link></Typography></button>
            </Paper>
            
        )
    }
}
export default Direct;


export const handleLogout=()=>{
    app.auth().signOut();
    console.log("LogOut")
}