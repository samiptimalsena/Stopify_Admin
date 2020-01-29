import React from 'react'
import AppBarUser from './appBar.js'
import BodyUser from './body.js'
import { BrowserRouter, Route } from 'react-router-dom'


export default () => {
    return (
        <div>

            <AppBarUser />
            <BodyUser />


        </div>
    )
}