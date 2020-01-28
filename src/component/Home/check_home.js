import React from 'react'
import AppBar from './appBar.js'
import Body from './body.js'
import Upload from '../../component/upload/upload.js'
import { BrowserRouter, Route } from 'react-router-dom'

export default () => {
    return (
        <div>
            <BrowserRouter>
                <AppBar />
                <Route exact path='/' component={Body} />
                <Route exact path='/upload' component={Upload} />
            </BrowserRouter>

        </div>
    )
}