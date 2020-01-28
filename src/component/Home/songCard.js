import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import {Avatar} from '@material-ui/core'

const useStyles=makeStyles((theme)=>({
    
    card:{
        width:"400px",
        height:"60px",
        marginLeft:"-12px",
        marginTop:"5px",
        backgroundColor:"rgba(255,255,255,.3)",
        borderRadius:"20px"
    },
    text:{
        fontSize:'21px',
        marginTop:"-5px",
        marginLeft:"5px",
        '&:hover':{
            color:"#06A10B",
            cursor:'pointer'
        }

    },
    details:{
        display:'flex',
        flexDirection:"row",
        marginTop:"-5px",
    },
    details2:{
        display:'flex',
        flexDirection:"row",
        marginTop:"-5px",
        marginLeft:"38px"
    },
    bar:{
        marginLeft:"5px",
        marginRight:"5px"
    },
    image:{
        height:"30px",
        width:"30px"
    },
    deleteIcon:{
        marginLeft: "auto",
        '&:hover':{
            color:"#800000",
            cursor:"pointer"
        }
    }
}))
export default (props)=>{
    const classes=useStyles()
    return(
        
        <Card variant="outlined" className={classes.card}>
            <CardContent>
                <div className={classes.details}>
                <img src={props.data["imageURL"]} className={classes.image}/>
                <Typography className={classes.text}>{props.data["name"]}</Typography>
               
                <DeleteIcon className={classes.deleteIcon}/>
    
                </div>
               <div className={classes.details2}>
                <Typography>{props.data["album"]}</Typography>
                <Typography className={classes.bar}>||</Typography>
                <Typography>{props.data["genre"]}</Typography>
                </div>
            </CardContent>
        </Card>
        
    )
}