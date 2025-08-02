import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const ProtectedRoute = ({ children }) => {
 const { isLogin } = useContext(AuthContext);
    const location = useLocation();

    if (!isLogin) {
        // Save the page user was trying to visit
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
};

export default ProtectedRoute;