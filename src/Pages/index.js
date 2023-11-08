import React from 'react';
import {Routes,Route} from 'react-router-dom'
import { Landingpage } from './Landingpage';
export const Pages = () => {
    return(
        <Routes>
            <Route path='/' element={<Landingpage />}></Route>
        </Routes>
    )
}