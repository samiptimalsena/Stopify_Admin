import React, {Component} from 'react';
import {fireStore as db}  from './firebase.js'

class Database extends Component{
    constructor(props){
        super(props);
        this.state={
            albumName:'',
            artistName:'',
            genreName:'',
            songName:''
        }
        this.handleClick2=this.handleClick2.bind(this)
        this.handleClick=this.handleClick.bind(this)    
        this.albumChange=this.albumChange.bind(this) 
        this.artistChange=this.artistChange.bind(this)
        this.genreChange=this.genreChange.bind(this)
        this.nameChange=this.nameChange.bind(this)
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
    handleClick=()=>{
        db.collection("music").add({
            album:this.state.albumName,
            artist:this.state.artistName,
            genre:this.state.genreName,
            name:this.state.songName
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    
    render(){
        return(
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
                <button onClick={this.handleClick}>ADD</button>
            </div>
        )
    }

}
export default Database;
