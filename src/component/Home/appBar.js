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
import {Button} from "@material-ui/core"
import {useMediaQuery} from 'react-responsive'

const StyledMenuItem = withStyles(theme => ({
    root: {
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
          marginLeft:"145px",
          marginTop:"3px",
        
      },
      
    '@media (min-width:423px)':{
       menuIcon:{
           marginLeft:"20px"
       } ,
       uploadButton:{
        marginLeft:'1150px',
        color:'white',
        marginTop:"0px",
        '&:hover':{
          color:'#06A10B'
        }
}}})



function Bar() {
    const {currentUser}=useContext(AuthContext)
    const classes = useStyles();
    const isDesktop = useMediaQuery({
        query: '(min-device-width:423px)'
    })


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
               {isDesktop && <Button className={classes.uploadButton}>Upload</Button> }
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
                    <StyledMenuItem onClick={handleLogout}>Logout</StyledMenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
       
    )
}
export default Bar;