import React,{useContext} from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Logo from '../../images/stopify-admin.png'
import {makeStyles,withStyles} from '@material-ui/core/styles'
import {handleLogout} from '../../firebase/login.js'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {AuthContext} from '../../Auth/auth.js'
import {Link} from 'react-router-dom'

const StyledMenuItem = withStyles(theme => ({
    root: {
        color:"black",
      '&:hover': {
        backgroundColor: "black",
        color:"white"
        
      },

    },
  }))(MenuItem);

const useStyles=makeStyles({
    
    Appbar:{
        backgroundColor:"black",
        height:"60px",
        margin:"0px"
      },
      menuIcon:{
          marginLeft:"auto",
          marginTop:"5px",
        
      }
})



function Bar() {
    const {currentUser}=useContext(AuthContext)
    const classes = useStyles();
    


    const [anchorEl,setAnchorEl]=React.useState(null);
    const open=Boolean(anchorEl);
    const handleClick=e=>{
        setAnchorEl(e.currentTarget);
    }
    const handleClose=e=>{
        setAnchorEl(null)
    }
    return (
        
        <AppBar position='static' className={classes.Appbar}>
            <Toolbar>
                <img src={Logo} style={{ height: "30px" }} alt="Logo" />
                <IconButton onClick={handleClick} style={{color:"white"}} className={classes.menuIcon}><AccountCircleOutlinedIcon/></IconButton>
                <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} >
                <MenuItem>
                <ListItemIcon>
                <SentimentSatisfiedOutlinedIcon style={{color:"black",marginLeft:"-10px"}}/>
                </ListItemIcon>
                <ListItemText style={{color:"black",marginLeft:"-35px"}}>Signed in as</ListItemText>
                </MenuItem>
                <b><p style={{textAlign:"right",marginTop:"-10px"}}>{currentUser.email}</p></b>
                    <hr/>
                    <Link to="/" style={{textDecoration:"none"}}>
                    <StyledMenuItem onClick={handleLogout}>Logout</StyledMenuItem>
                    </Link>
                </Menu>
            </Toolbar>
        </AppBar>
       
    )
}
export default Bar;