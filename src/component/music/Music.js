import React,{Component} from 'react'
import {fireStore as db} from '../../firebase/firebase.js'



class Music extends Component{
    constructor(props){
        super(props);
       
        this.showMusic=this.showMusic.bind(this)
    }
    showMusic=async()=>{
        db.collection("music").where("uid", "==", this.props.ID)
    .get()
    .then(function(querySnapshot) {
        if(!querySnapshot.empty)
        {
        querySnapshot.forEach(function(doc) {
            document.getElementById("content").innerHTML=doc.data().name;
        });
    }
    else{
        console.log("xaina")
        document.getElementById("content").innerHTML="Soryy, You have no Upload. Please Upload some music to see it here!!"
    }})
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}
    render(){
        return(
            <div>
                 <button onClick={this.showMusic}>Show My Music</button>
                 <h1>Your music are:</h1>
                 <p id="content"></p>
            </div>
            )
    }
}
export default Music