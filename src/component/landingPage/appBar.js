import React from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import HomeIcon from '@material-ui/icons/Home'
import Logo from '../../images/stopify-admin.png'
import { useMediaQuery } from 'react-responsive'
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const useStyles=makeStyles({
    
    Appbar:{
        backgroundColor:"black",
        height:"60px",
        margin:"0px"
      },
      homeIcon:{
        color:'white',
        marginLeft:'155px',
        marginTop:'5px',
        '&:hover': {
          color: '#06A10B'
        }
      },
      link:{
        textDecoration:'none',
      '&:hover':{
        textDecoration:'none'
      }
    },
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
}})



function Bar() {
    const classes = useStyles();
    const isDesktop = useMediaQuery({
        query: '(min-device-width:423px)'
    })
    const isMobile = useMediaQuery({
        query: '(max-device-width:422px)'
    })
    return (
        
        <AppBar position='static' className={classes.Appbar}>
            <Toolbar>
                <img src={Logo} style={{ height: "30px" }} alt="Logo" />
                <a href="https://stopify.netlify.com/" className={classes.link}>
                    {isMobile && <HomeIcon className={classes.homeIcon} />}
                    {isDesktop && <Button className={classes.linkButton}>Go to stopify</Button>}
                </a>
            </Toolbar>
        </AppBar>
       
    )
}
export default Bar;