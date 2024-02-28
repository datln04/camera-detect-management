import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const token = sessionStorage.getItem("ACCOUNT")
    let auth = { token: token ? token : null }
    return (
        auth?.token ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoute
