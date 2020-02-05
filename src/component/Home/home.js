import React from 'react'
import { BrowserRouter,Route} from 'react-router-dom'
import MainPage from './mainPage.js'
import Upload from '../upload/upload.js'

export default()=>{
    return(
        <BrowserRouter>
        <Route exact path='/upload'><Upload/></Route>
        <Route  exact path='/'><MainPage/></Route>
        </BrowserRouter>

    )
} 