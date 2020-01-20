import React, { Component } from "react";
import {storageRef } from "../firebase/firebase.js";
import {fireStore as db}  from '../firebase/firebase.js'
import {handleLogout} from '../firebase/direct.js'
import {Link} from 'react-router-dom'
var image_url;

class UploaderImage extends Component {
    constructor(props){
        super(props);
        this.state={
            image:null,
            img_progress:0,
            img:"",

            music_url:"",
            music:null,
            music_progress:0,

            albumName:'',
            artistName:'',
            genreName:'',
            songName:''
        }
        
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.handleChange2=this.handleChange2.bind(this)

        this.handleClick2=this.handleClick2.bind(this) 
        this.albumChange=this.albumChange.bind(this) 
        this.artistChange=this.artistChange.bind(this)
        this.genreChange=this.genreChange.bind(this)
        this.nameChange=this.nameChange.bind(this)
    }
    handleChange = e => {
        if(e.target.files[0]){
            var image=e.target.files[0];
            this.setState({
                image,
                img:URL.createObjectURL(e.target.files[0])
            })
        }        
      };
      handleChange2 = e => {
        if(e.target.files[0]){
            var music=e.target.files[0];
            this.setState({
                music    
            })
        }        
      };

      handleClick=()=>{
          const {image}=this.state;
          var metadata={
              contentType:'image/jpeg'
          };
          var uploadTask=storageRef.child('images/'+image.name).put(image,metadata)
          uploadTask.on('state_changed',(snapshot)=>{
              var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
              this.setState({
                  img_progress:progress
              })
              console.log("image upload is "+progress+"%done");
              switch(snapshot.state){
                  case 'paused':
                      console.log("paused");
                      break;
                  default:
                      console.log("running");
                      break;  
              }
          },(error)=>{
              switch(error.code){
                  case 'storage/unauthorized':
                      console.log("storage/unauthorized");
                      break;
                 default:
                      console.log("storage/unauthenticated");
              }
          },()=>{
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
                  
                      image_url=downloadURL
                
              })
          })


          const{music}=this.state;
          var metadata2={
              contentType:"mp3"
          };
          var uploadTask2=storageRef.child('songs/'+music.name).put(music,metadata2);
          uploadTask2.on('state_changed',(snapshot)=>{
                var progress2=(snapshot.bytesTransferred/snapshot.totalBytes)*100
                this.setState({
                    music_progress:progress2
                })
                console.log("music upload is"+progress2+"%done");
                switch(snapshot.state){
                    case 'running':
                        console.log('running');
                        break;
                    default:
                        console.log('paused');
                }},
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
                            album:this.state.albumName,
                            artist:this.state.artistName,
                            audioURL:downloadURL,
                            genre:this.state.genreName,
                            imageURL:image_url,
                            name:this.state.songName
                        })
                        .then(function(docRef) {
                            console.log("Document written with ID: ", docRef.id);
                        })
                        .catch(function(error) {
                            console.error("Error adding document: ", error);
                        });
                        
                    })
                }
                )

                //added from database.js
         

      }


      albumChange=(e)=>{
        this.setState({
            albumName:e.target.value
        })
    }
    artistChange=(e)=>{
        this.setState({
            artistName:e.target.value
        })
    }
    genreChange=(e)=>{
        this.setState({
            genreName:e.target.value
        })
    }
    nameChange=(e)=>{
        this.setState({
            songName:e.target.value
        })
    }
    handleClick2=()=>{
        console.log(this.state.albumName)  
        console.log(this.state.artistName)
        console.log(this.state.genreName)
        console.log(this.state.songName)
    }
    render(){
        return(
            <div>
                <h1>Upload</h1>
                <img id="pic" src={this.state.img} alt="your" style={{'height':'200px'}}/><br/>
                <label>Select Image</label>
                <input type='file' onChange={this.handleChange}/>
                <br/>
                <br/>
                <label>Select Music</label>
                <input type='file' onChange={this.handleChange2} />
                <br/>
                <br/> 
                
                <div>
                <h1>Database Upload</h1>
                <form>
                    <label>Album:   </label>
                    <input type='text' placeholder='Album' value={this.state.albumName} onChange={this.albumChange}></input>
                    <br/>
                    <label>Artist:   </label>
                    <input type='text' placeholder='Artist' value={this.state.artistName} onChange={this.artistChange}></input>
                    <br/>
                    <label>Genre:   </label>
                    <input type='text' placeholder='Genre' value={this.state.genreName} onChange={this.genreChange}></input>
                    <br/>
                    <label>Song Name:   </label>
                    <input type='text' placeholder='Song Name' value={this.state.songName} onChange={this.nameChange}></input>
                    
                </form>
                <button onClick={this.handleClick2}>check</button>
                <br/>
                <input type='submit' value='Submit' onClick={this.handleClick} /> 
                <p>upload is {this.state.music_progress}%done</p> 
            </div>
            <button onClick={handleLogout} >
                <Link to='/'>LogOut</Link>
                </button>
            </div>
        )
    }
}

export default UploaderImage;