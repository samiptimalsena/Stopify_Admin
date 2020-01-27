import React,{useContext} from 'react'
import {handleLogout} from '../firebase/login.js'
import {Link} from 'react-router-dom'
import {AuthContext} from '../Auth/auth.js'



export default ()=>{
    const {currentUser}=useContext(AuthContext)
    console.log(currentUser.email)
    return(
        <div>
            <button><Link to='myMusic'>
                        My Music
                </Link>
            </button>
            <br/>
            <button>
                <Link to='/upload'>
                    Upload
                </Link>
            </button>
            <br/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
