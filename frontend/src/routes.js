import React from 'react'

import Main from './pages/Main/main'
import Rockets from './pages/Rockets/rockets'
import News from '../src/pages/News/news'

import {

    Route,
    Routes,
    BrowserRouter

} from 'react-router-dom'

export default function Router() {

    return (

        <BrowserRouter>

            <Routes>
                <Route path="/news" exact element={ <News/> } />
                <Route path="/main" exact element={ <Main/> } />
                <Route path="/" element={ <Rockets/> } />

            </Routes>
            
        </BrowserRouter>

    )

}