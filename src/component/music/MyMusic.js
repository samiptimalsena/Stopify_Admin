import React,{Component} from 'react'
import {AuthContext} from '../../Auth/auth.js'
import Music from './Music.js'

class MyMusic extends Component{
    render(){
        return(
            <AuthContext.Consumer>
                {({currentUser})=>(
                    <Music ID={currentUser.uid}/>
                )}
            </AuthContext.Consumer>
        )
    }
}
export default MyMusic