import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouteLogin(props) {
    const token = localStorage.getItem("user");
    console.log(token);

    return   token ? <Navigate to="/" /> : <Outlet />
}

export default PrivateRouteLogin;