import React from "react";
import "./App.css";
import LandingPage from './component/landingPage/landingPage.js'
import Home from './component/Home/home.js'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './Auth/auth.js'
import PrivateRoute from './routes/privateRoute.js'


function App() {
  return(
  <AuthProvider>
    <BrowserRouter>
    
      <PrivateRoute exact path='/' component={Home}/>
      <LandingPage/>
      
     
    </BrowserRouter>
  </AuthProvider>
)
}

export default App;