import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { routes } from '../services'
import Register from './register'

const Pages = () => {
    return (
        <Routes>
            <Route path={routes.register} element={<Register />} />
        </Routes>
    )
}

export default Pages