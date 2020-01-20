import React,{useContext} from 'react'
import {Redirect} from 'react-router-dom'
import {AuthContext} from '../Auth/auth.js'
import Direct from './direct.js'

export default ()=>{
    
    const {currentUser}=useContext(AuthContext)
    if(currentUser){
        return <Redirect to='/'/>
    }
    return(
        <div>
            <Direct/>
        </div>
    )   
}
