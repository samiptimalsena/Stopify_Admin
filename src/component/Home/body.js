import React, { useState, useContext, useEffect } from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import background from '../../images/user_background.jpg'
import { fireStore as db } from '../../firebase/firebase.js'
import { AuthContext } from '../../Auth/auth.js'
import SongCard from './songCard.js'
import { Typography, Container } from '@material-ui/core'
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {useMediaQuery} from 'react-responsive'
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    paperContainer: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '92vh',
        display: 'flex',
        flexDirection: 'column',

    },
    titleHolder: {
        color: "white",
        display: 'flex',
        flexDirection: "row",
        backgroundColor: "gray",
        width: "410px",
        marginLeft: "-16px",
        height: "60px",
        alignItems: "center",
        borderRadius: "10px"
    },
    title: {
        fontSize: "30px",
        marginLeft: "5px"
    },
    musicIcon: {
        fontSize: "30px",
        marginTop: "-5px"
    },
    fab:{
        marginLeft:"320px",
        marginTop:"300px"
    },
    '@media (min-width:423px)':{
        titleHolder:{
            width:"600px",
            marginLeft:"-115px",
            marginBottom:"20px",
            marginTop:"10px"
        },
        musicIcon:{
            marginLeft:"100px"
        }
    }
}))

function Body() {
    const classes = useStyles();
    const [allSongs, setAllSongs] = useState([]);
    const { currentUser } = useContext(AuthContext);
    
    const isMobile = useMediaQuery({
        query: '(max-device-width:422px)'
    })

    const getSongInfo = async () => {
        db.collection("music").where("uid", "==", currentUser.uid).get()
            .then((querySnapshot) => {

                const songs = querySnapshot.docs.map((el) => el.data())
                console.log(currentUser.uid);
                setAllSongs(songs);

            }
            ).catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        console.log("loading");
        getSongInfo();
    }, [])

    return (

        <Paper square className={classes.paperContainer}>
            <Container maxWidth="xs">
                <div className={classes.titleHolder} >
                    <MusicNoteOutlinedIcon className={classes.musicIcon} />
                    <Typography className={classes.title}>Songs</Typography>
                </div>
                {allSongs.map((sample) =>
                    <SongCard key={sample["name"]} data={sample} />)}
              <Link to="/upload">
              {isMobile && <Fab color="primary" aria-label="add" className={classes.fab} style={{backgroundColor:"gray"}}>
                    <AddIcon  />
                </Fab>}
                </Link>
            </Container>
        </Paper>
    )
}

export default Body;