import React,{Component} from 'react';
import {AuthContext} from '../../Auth/auth.js'
import Uploader from './uploader.js'
class Upload extends Component{
    render(){
    return(
        <div>
            <AuthContext.Consumer>
                {({currentUser})=>(
                    <Uploader userId={currentUser.uid}/>
                )}
            </AuthContext.Consumer>
        </div>
    )
}}
export default Upload;