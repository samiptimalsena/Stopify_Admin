import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { fireStore as db } from '../../firebase/firebase.js'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({

    card: {
        width: "100%",
        height: "60px",
        marginTop: "5px",
        backgroundColor: "rgba(255,255,255,.3)",
        borderRadius: "20px"
    },
    text: {
        fontSize: '21px',
        marginTop: "-5px",
        marginLeft: "5px",
        '&:hover': {
            color: "#06A10B",
            cursor: 'pointer'
        }

    },
    details: {
        display: 'flex',
        flexDirection: "row",
        marginTop: "-5px",
    },
    details2: {
        display: 'flex',
        flexDirection: "row",
        marginTop: "-5px",
        marginLeft: "38px"
    },
    bar: {
        marginLeft: "5px",
        marginRight: "5px"
    },
    image: {
        height: "30px",
        width: "30px"
    },
    deleteIcon: {
        marginLeft: "auto",
        '&:hover': {
            color: "#800000",
            cursor: "pointer"
        }
    }
}))
export default (props) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose=()=>{
        setOpen(false)
    }

    function toDelete() {
        console.log(props.data["name"])
        db.collection("music").where("audioUrl", "==", props.data["audioUrl"]).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(function (doc) {
                    doc.ref.delete();
                    console.log("deleted")
                    setOpen(false);
                })
            })
            .catch(error => {
                console.log("error", error)
            })

    }
    return (

        <Card variant="outlined" className={classes.card}>
            <CardContent>
                <div className={classes.details}>
                    <img src={props.data["imageUrl"]} className={classes.image} alt="musicPic" />
                    <Typography className={classes.text}>{props.data["name"]}</Typography>

                    <DeleteIcon className={classes.deleteIcon} onClick={handleClickOpen} />
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>{"Are you sure want to delete it?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Your song will be permanently deleted.You can't recover it later.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Disagree
                             </Button>
                            <Button onClick={toDelete} color="primary" autoFocus>
                                Agree
                             </Button>
                        </DialogActions>

                    </Dialog>

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