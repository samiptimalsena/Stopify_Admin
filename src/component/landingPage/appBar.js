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
        margin:"0px",
        width:"100%"
      },
      homeIcon:{
        color:'white',
        marginTop:"5px",
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
    '@media (min-width:924px)':{
        linkButton:{
          color:'white',
         margin:"0px 0px 0px auto",
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
        query: '(min-device-width:924px)'
    })
    const isMobile = useMediaQuery({
        query: '(max-device-width:923px)' 
    })
    return (
        
        <AppBar position='static' className={classes.Appbar}>
            <Toolbar>
                <img src={Logo} style={{ height: "30px" }} alt="Logo" />
                <div style={{marginLeft:"auto"}}>
                <a href="https://stopify.netlify.com/" className={classes.link}>
                    {isMobile && <HomeIcon className={classes.homeIcon} />}
                    {isDesktop && <Button className={classes.linkButton}>Go to stopify</Button>}
                </a>
                </div>
            </Toolbar>
        </AppBar>
       
    )
}
export default Bar;