
  
import React from 'react'
import app from '../../firebase/firebase.js'
import 'firebase/auth'
import * as firebase from 'firebase/app'
import {Link} from 'react-router-dom'



import Paper from '@material-ui/core/Paper'
import background from '../../images/home_background.jpeg'
import {Typography} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Logo from '../../images/stopify-admin.png'
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import {useMediaQuery} from 'react-responsive'

const useStyles=makeStyles({
    paperContainer:{
      backgroundImage: `url(${background})`,
      backgroundSize:"cover",
      height:'100vh'
    },
    Appbar:{
      backgroundColor:"black",
      height:"60px"
    },
    homeIcon:{
      color:'white',
      marginLeft:'155px',
      marginTop:'5px',
      '&:hover': {
        color: '#06A10B'
      }
    },
    title:{
      color:'whitesmoke',
      textAlign: 'center',
      paddingTop:"50px"
    },
    loginButton:{
      borderRadius:"20px",
      color:"white",
      marginTop:"125px",
      marginLeft:"35%",
      '&:hover':{
        color:'#06A10B'
      }
    },
    signIn:{
      borderRadius:"20px",
      color:"white",
      marginTop:"10px",
      marginLeft:"42%",
      '&:hover':{
        color:'#06A10B'
      }
    },
    signUp:{
      borderRadius:"20px",
      color:"white",
      marginTop:"10px",
      marginLeft:"42%",
      '&:hover':{
        color:'#06A10B'
      }
    }
    ,
    '@media (min-width:423px)':{
        linkButton:{
          marginLeft:'1150px',
          color:'white',
          marginTop:"0px",
          '&:hover':{
            color:'#06A10B'
          }
        },
        link:{
            textDecoration:'none',
          '&:hover':{
            textDecoration:'none'
          }
        },
        title:{
          paddingTop:"30px"
        },
        loginButton:{
          borderColor:"white",
          marginTop:"150px",
          marginLeft:"43%"
        },
        signIn:{
          borderColor:"white",
          marginTop:"2%",
          marginLeft:"45%"
        },
        signUp:{
          borderColor:"white",
          marginTop:"2%",
          marginLeft:"44.9%"
        }
  
    }
  })


function Direct(){
    
   const click=async()=>{
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
    const classes=useStyles();
    const isDesktop=useMediaQuery({
      query:'(min-device-width:423px)'
    })
    const isMobile=useMediaQuery({
      query:'(max-device-width:422px)'
    })
    
    return (
    
    
        <Paper className={classes.paperContainer} square>
          <AppBar position='static' className={classes.Appbar}>
            <Toolbar>
                  <img src={Logo} style={{height:"30px"}} alt="Logo"/>
                  <a href="https://stopify.netlify.com/" className={classes.link}>
                  {isMobile && <HomeIcon className={classes.homeIcon}/>}
                 {isDesktop && <Button className={classes.linkButton}>Go to stopify</Button>}
                  </a>
                  </Toolbar>
          </AppBar>
          <Typography variant='h3' className={classes.title} style={{margin:"10px"}}>
            Welcome to Stopify-Admin
          </Typography>
          <Link to="/" className={classes.link}>
                <Button variant="outlined" className={classes.loginButton} onClick={click}><Typography>Google Login</Typography></Button>  
          </Link>
          
          <Button variant="outlined" className={classes.signIn} ><Typography>Sign In</Typography></Button>
          <Button variant="outlined" className={classes.signUp}><Typography>Sign Up</Typography></Button>
        </Paper>
        
        
      );
    
}
export default Direct;


export const handleLogout=()=>{
    app.auth().signOut();
    console.log("LogOut")
}
