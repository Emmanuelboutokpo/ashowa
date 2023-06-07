import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute(props) {
    const token = localStorage.getItem("user");

    return   token ? <Outlet /> : <Navigate to="/login" />

}

export default PrivateRoute; 
 