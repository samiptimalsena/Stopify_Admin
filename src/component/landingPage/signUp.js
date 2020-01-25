import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {Typography} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import background from '../../images/home_background.jpeg'
import Container from '@material-ui/core/Container'
import {registerWithEmail} from '../../firebase/login.js'

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& label': {
            color: "gray"
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'gray',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);

const useStyles=makeStyles((theme)=>({
    paperContainer: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '92vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        marginTop: theme.spacing(10),
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    
    signUp: {
        marginTop: theme.spacing(8),
        color: "white",
        borderColor:"white",
        borderRadius:"20px",
        '&:hover': {
            color: "#06A10B"
        }
    }

}))




function SignUp(){
    const classes=useStyles();
    let email1=React.createRef();
    let password=React.createRef();

    const handleRegister=(e)=>{
        e.preventDefault();
        const data={email:email1.current.value, password:password.current.value};
        registerWithEmail(data);
    }

    return(
        <Paper className={classes.paperContainer} square>
            <Container className={classes.paper} maxWidth="xs">
            <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5' style={{ color: "white" }}>
                    Sign Up
                </Typography>
            <form className={classes.form} onSubmit={handleRegister}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <CssTextField label="First Name" variant="outlined" required type="text" inputProps={{ style: { color: "white" } }}  fullWidth autoFocus />
                </Grid>
                <Grid item xs={12} sm={6}>
                <CssTextField label="Last Name" variant="outlined" required type="text" inputProps={{ style: { color: "white" } }} fullWidth   />
                </Grid>
                <Grid item xs={12}>
                <CssTextField label="Email" inputRef={email1} variant="outlined"required  type="email" inputProps={{ style: { color: "white" } }} fullWidth  />
                </Grid>
                <Grid item xs={12}>
                <CssTextField label="Password" inputRef={password} variant="outlined" required type="password" inputProps={{ style: { color: "white" } }} fullWidth />
                </Grid>
            </Grid>
            <Button type="submit" variant="outlined" className={classes.signUp} >Sign Up</Button>
            </form>
            </Container>

        </Paper>
    )
}
export default SignUp