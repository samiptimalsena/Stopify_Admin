import React from "react";
import "./App.css";
import Upload from './component/upload/upload.js'
import LandingPage from './component/landingPage/landingPage.js'
import Home from './component/Home/check_home.js'
import MyMusic from './component/music/MyMusic.js'
import {BrowserRouter,Route} from 'react-router-dom'
import {AuthProvider} from './Auth/auth.js'
import PrivateRoute from './routes/privateRoute.js'


function App() {
  return(
  <AuthProvider>
    <BrowserRouter>
      <PrivateRoute exact path='/' component={Home}/>
      <LandingPage/>
      <Route exact path='/upload' component={Upload}/>
      <Route exact path='/myMusic' component={MyMusic}/>
    </BrowserRouter>
  </AuthProvider>
)
}

export default App;