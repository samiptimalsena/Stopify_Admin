import React,{useContext} from 'react'
import {Redirect,BrowserRouter,Route} from 'react-router-dom'
import {AuthContext} from '../../Auth/auth.js'
import AppBar from './appBar.js'
import Body from './body.js'
import SignIn from './signIn.js'
import SignUp from './signUp.js'


export default ()=>{
    
    const {currentUser}=useContext(AuthContext)
    if(currentUser){
        return <Redirect to='/'/>
    }
    return(
        <div>
           <AppBar/>
            <BrowserRouter>
                <Route exact path='/'><Body/></Route>
                <Route exact path='/signIn'><SignIn/></Route>
                <Route exact path='/signUp'><SignUp/></Route>
            </BrowserRouter>
        </div>
    )   
}