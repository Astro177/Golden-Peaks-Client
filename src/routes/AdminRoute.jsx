/* eslint-disable react/prop-types */
import React from 'react';

import { useNavigate } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import Loader from '../shared/Loader';

const AdminRoute = ({children}) => {
    const[isAdmin , isAdminLoading] = useAdmin()
    const{user,loading} = useAuth();
    const navigate = useNavigate();

    if(loading || isAdminLoading){
        return <Loader/>
    }
    if(user && isAdmin){
        return children;
    }
    return navigate("/")
};

export default AdminRoute;