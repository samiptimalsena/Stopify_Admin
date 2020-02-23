import React,{useState,useContext} from 'react';
import {Paper,Container,Typography,Button} from '@material-ui/core';
import background from '../../images/user_background.jpg'
import {makeStyles,withStyles} from '@material-ui/core/styles'
import TextField from "@material-ui/core/TextField"
import {storageRef } from "../../firebase/firebase.js";
import {fireStore as db}  from '../../firebase/firebase.js'
import {AuthContext} from '../../Auth/auth.js'
import CircularProgress from '@material-ui/core/CircularProgress';
import {Redirect} from 'react-router-dom'

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& label': {
            color: "black"
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
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

var imageURL;

const useStyles=makeStyles(theme=>({
    paperContainer:{
        backgroundImage:`url(${background})`,
        backgroundSize:"100%",
        height:window.innerHeight-60,
        width:"100%"
    },
    imageTitle:{
        marginTop:"2%",
        fontSize:"22px",
        color:"white"
    },
    title:{
        fontSize:"30px",
        color:"white",
        paddingTop:"3%",
        marginLeft:"5%"
    },
    imageBox:{
        
        width:"40%",
        backgroundColor:"white"
        
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        marginTop: theme.spacing(2)
    },
    submit: {
        marginTop: theme.spacing(3),
        marginLeft:"37%",
        color: "black",
        borderColor:"black",
        borderRadius:"20px",
        '&:hover': {
            color: "#06A10B"
        }
    },
    titleHolder:{
        backgroundColor:"gray",
        width: "100%",
        height: "60px",
        alignItems: "center",
        borderRadius: "10px"
    },
    songTitle:{
        marginTop:"7%",
        fontSize:"22px",
        color:"white"
    },
    '@media (min-width:423px)':{
        titleHolder:{
            width:"600px",
            marginLeft:"-115px"
        },
        title:{
            marginLeft:"30%",
            paddingTop:"2%"
        }
    }

}))




export default ()=>{
    const classes=useStyles();
    const {currentUser}=useContext(AuthContext)
    let album=React.createRef();
    let genre=React.createRef();
    let artist=React.createRef();
    let name=React.createRef();

    const [image,setImage]=useState(null);
    const [imgUrl,setImgUrl]=useState("");
    const [song,setSong]=useState(null);
    const [Name,setName]=useState("");
    const [Album,setAlbum]=useState("");
    const [Genre,setGenre]=useState("");
    const [Artist,setArtist]=useState("");

    const [uploading,setUploading]=useState(false);
    const [allow,setAllow]=useState(false);

    const handleImageChange=e=>{
        if(e.target.files[0]){
            var image=e.target.files[0];
            setImage(image);
            var url=URL.createObjectURL(e.target.files[0]);
            setImgUrl(url);
        }
    }
    const handleSongChange=e=>{
        if(e.target.files[0]){
            var song=e.target.files[0];
            setSong(song);
        }
    }

    const albumChange=(e)=>{
       
            setAlbum(e.target.value)
        
    }
    const artistChange=(e)=>{
        
            setArtist(e.target.value)
       
    }
   const genreChange=(e)=>{
       
            setGenre(e.target.value)
        
    }
    const nameChange=(e)=>{
        
            setName(e.target.value)
       
    }

    const handleSubmit=async()=>{
        setUploading(true);
        
        var metadata={
            contentType:'image/jpeg'
        }
        var uploadTask=storageRef.child('images/'+image.name).put(image,metadata);
        uploadTask.on('state_changed',(snapShot)=>{
            var progress1=(snapShot.bytesTransferred/snapShot.totalBytes)*100
                console.log("music upload is"+progress1+"%done");
            switch(snapShot.state){
                case 'paused':
                    console.log("paused");
                    break;
                default:
                    console.log("running");
            }
        },
        (error)=>{
            switch(error.code){
                case 'storage/unauthorized':
                    console.log("storage/unauthorized");
                    break;
               default:
                    console.log("storage/unauthenticated");
            }
        },()=>{
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
                    imageURL=downloadURL; 
            })
        }
        
        )

        var metadata2={
            contentType:"mp3"
        };
        var uploadTask2=storageRef.child('songs/'+song.name).put(song,metadata2);
          uploadTask2.on('state_changed',(snapShot)=>{
            var progress2=(snapShot.bytesTransferred/snapShot.totalBytes)*100
            console.log("music upload is"+progress2+"%done");
            switch(snapShot.state){
                case 'paused':
                    console.log("paused");
                    break;
                default:
                    console.log("running");
            }
          },
          (error)=>{
              switch(error.code){
                  case 'storage/unauthorized':
                      console.log("storage/unauthorized");
                      break;
                 default:
                      console.log("storage/unauthenticated");
          }},()=>{
            uploadTask2.snapshot.ref.getDownloadURL().then((downloadURL)=>{
                
                db.collection("music").add({
                    album:Album,
                    artist:Artist,
                    audioUrl:downloadURL,
                    genre:Genre,
                    imageUrl:imageURL,
                    name:Name,
                    uid:currentUser.uid
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    setAllow(true);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
                
            })
        }

          )

    }

    


    return(
        <Paper square className={classes.paperContainer}>
           
            <Container maxWidth="xs">
                <div className={classes.titleHolder}>
            <Typography className={classes.title}>Upload Your Song</Typography>
            </div>
                <Typography className={classes.imageTitle} >Select Image</Typography>
                
                <Paper square className={classes.imageBox}>
                   {!image &&<Typography style={{paddingTop:"40%"}}>Song's Image</Typography>}
                   <img src={imgUrl} style={{height:"110%",width:"100%",margin:"0",padding:"0"}} alt=""/>
                </Paper>
                <input  type="file" onChange={handleImageChange}/>
                <Typography className={classes.songTitle}>Select Song</Typography>
                <input type="file" onChange={handleSongChange}/>
                <form className={classes.form} >
                <CssTextField label="Album" variant="outlined" required type="text" inputRef={album} inputProps={{ style: { color: "white" } }} onChange={albumChange} fullWidth autoFocus />
                <CssTextField label="Artist" variant="outlined" required type="text" inputRef={artist} inputProps={{ style: { color: "white" } }} onChange={artistChange} className={classes.text} fullWidth />
                <CssTextField label="Genre" variant="outlined" required type="text" inputRef={genre} inputProps={{ style: { color: "white" } }} onChange={genreChange} className={classes.text} fullWidth />
                <CssTextField label="Name" variant="outlined" required type="text" inputRef={name} inputProps={{ style: { color: "white" } }} onChange={nameChange} className={classes.text} fullWidth />
                
                </form>
                
                <Button type="submit" variant="outlined" className={classes.submit} onClick={handleSubmit}>Submit</Button>
               {uploading && <CircularProgress style={{marginLeft:"45px",marginTop:"10px"}}/>}
                {allow && <Redirect to="/"/> }
            </Container>
        </Paper>
    )
}