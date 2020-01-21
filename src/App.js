import React from "react";
import "./App.css";
import Upload from './component/upload.js'
import Login from './firebase/Login.js'
import Home from './component/Home.js'
import MyMusic from './component/MyMusic.js'
import {BrowserRouter,Route} from 'react-router-dom'
import {AuthProvider} from './Auth/auth.js'
import PrivateRoute from './routes/privateRoute.js'

function App() {
  return(
  <AuthProvider>
    <BrowserRouter>
      <PrivateRoute exact path='/' component={Home}/>
      <Login/>
      <Route exact path='/upload' component={Upload}/>
      <Route exact path='/myMusic' component={MyMusic}/>
    </BrowserRouter>
  </AuthProvider>
)
}

export default App;