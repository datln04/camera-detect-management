import Cookies from 'js-cookie';
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const token = Cookies.get("token");
    let auth = { token: token ? token : null }
    return (
        auth?.token ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoute
