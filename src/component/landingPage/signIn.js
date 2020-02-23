import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import background from '../../images/home_background.jpeg'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core'
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'
import {loginWithEmail} from '../../firebase/login.js'


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

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: window.innerHeight,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        marginTop: theme.spacing(14),
        height:"100%",
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
    text: {
        marginTop: theme.spacing(2)
    },
    signIn: {
        marginTop: theme.spacing(8),
        color: "white",
        borderColor:"white",
        borderRadius:"20px",
        '&:hover': {
            color: "#06A10B"
        }
    }


}))

function SignIn() {
    const classes = useStyles();
    
    let email=React.createRef();
    let password=React.createRef();

    const handleLogin=(e)=>{
        e.preventDefault();
        const data={email:email.current.value, password:password.current.value};
        loginWithEmail(data);
    }

    return (
        <Paper className={classes.paperContainer}>
            <Container className={classes.paper} maxWidth="xs">
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5' style={{ color: "white" }}>
                    Sign In
                </Typography>
                <form className={classes.form} onSubmit={handleLogin} >
                    <CssTextField label="Email" variant="outlined" inputRef={email}required type="email" inputProps={{ style: { color: "white" } }} fullWidth autoFocus />
                    <CssTextField label="Password" variant="outlined" inputRef={password}  required type="password" inputProps={{ style: { color: "white" } }} className={classes.text} fullWidth />
                    
                    <Button type="submit" variant="outlined" className={classes.signIn}>Sign In</Button>
                   
                </form>
            </Container>
        </Paper>
    )
}
export default SignIn;