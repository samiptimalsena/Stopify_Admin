import React from 'react'
import {handleLogout} from '../firebase/login.js'
import {Link} from 'react-router-dom'



export default ()=>{
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
