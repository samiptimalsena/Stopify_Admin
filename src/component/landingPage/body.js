import React from 'react';
import {Typography} from '@material-ui/core'
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom' 
import background from '../../images/home_background.jpeg'
import {Paper} from '@material-ui/core'
import {googleLogin} from '../../firebase/login.js'

const useStyles=makeStyles((theme)=>({
    paperContainer: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '92vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title:{
        color:'whitesmoke',
        paddingTop:"50px",
        textAlign:'center'
    },
    loginButton:{
        borderRadius:"20px",
        borderColor:"white",
        color:"white",
        marginTop:"125px",
        '&:hover':{
          color:'#06A10B'
        }
      },
      signIn:{
        borderRadius:"20px",
        color:"white",
        borderColor:"white",
        marginTop:"20px",
        '&:hover':{
          color:'#06A10B'
        }
      },
      signUp:{
        borderRadius:"20px",
        color:"white",
        borderColor:"white",
        marginTop:"20px",
        '&:hover':{
          color:'#06A10B'
        }
      },
      link:{
        textDecoration:'none'
      },
      '@media (min-width:423px)':{
        title:{
          paddingTop:"30px"
        },
        loginButton:{
          borderColor:"white",
          marginTop:"150px"
        },
        signIn:{
          borderColor:"white",
          marginTop:theme.spacing(5),
        },
        signUp:{
          borderColor:"white",
          marginTop:theme.spacing(5)
        }
  
    }
}))

function Body(){
    const classes=useStyles()
    return(
        <Paper className={classes.paperContainer} square>
             <Typography variant='h3' className={classes.title}>
        Welcome to Stopify-Admin
      </Typography>
     <Link to='/' className={classes.link}>
      <Button variant="outlined" className={classes.loginButton} onClick={googleLogin}><Typography>Google Login</Typography></Button>
      </Link>
      <Link to="/signIn" className={classes.link}>
      <Button variant="outlined" className={classes.signIn}><Typography>Sign In</Typography></Button>
      </Link>
      
      <Button variant="outlined" className={classes.signUp}><Typography>Sign Up</Typography></Button>
        </Paper>
    )
}
export default Body