import React,{Component} from 'react'
import {fireStore as db} from '../firebase/firebase.js'



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
            var h=document.createElement("h")
            h.innerHTML="Your music are"
            document.body.appendChild(h)
            var p=document.createElement('p')          
            p.innerHTML=doc.data().name
            document.body.appendChild(p)
        });
    }
    else{
        var p1=document.createElement('p')
        p1.innerHTML="Sorry You have no Upload"
        document.body.appendChild(p1)
    }})
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}
    render(){
        return(
            <div>
                 <button onClick={this.showMusic}>Show My Music</button>
            </div>
            )
    }
}
export default Music