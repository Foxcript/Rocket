import React from 'react'
import Main from './pages/Main/main'
import Rockets from './pages/Rockets/rockets'

import {

    Route,
    Routes,
    BrowserRouter

} from 'react-router-dom'

export default function Router() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/s" exact element={ <Main/> } />
                <Route path="/" exact element={ <Rockets/> } />

            </Routes>
            
        </BrowserRouter>

    )

}