import React, { Component } from "react";
import {storageRef } from "../../firebase/firebase.js";


class UploaderImage extends Component {
    constructor(props){
        super(props);
        this.state={
            url:"",
            image:null,
            img_progress:0,
            img:"",
            music:null,
            music_progress:0
        }
          this.handleChange=this.handleChange.bind(this)
          this.handleClick=this.handleClick.bind(this)
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
                  this.setState({
                      url:downloadURL
                  })
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
                }}
                )


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
                <input type='submit' value='Submit' onClick={this.handleClick} />  
                <p>upload is {this.state.music_progress}%done</p> 
            </div>
        )
    }
}

export default UploaderImage;