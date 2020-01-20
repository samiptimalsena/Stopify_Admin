import React from "react";
import "./App.css";
import Uploader from './component/uploader.js'
import Login from './firebase/Login.js'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './Auth/auth.js'
import PrivateRoute from './routes/privateRoute.js'

function App() {
  return(
  <AuthProvider>
    <BrowserRouter>
      <PrivateRoute exact path='/' component={Uploader}/>
      <Login/>
    </BrowserRouter>
  </AuthProvider>
)
}

export default App;