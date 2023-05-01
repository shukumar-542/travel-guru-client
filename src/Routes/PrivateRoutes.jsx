/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <>Loading</>
    }
    if(user){
       return children; 
    }
    return <Navigate to='/login/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;