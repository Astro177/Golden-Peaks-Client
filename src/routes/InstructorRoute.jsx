/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useInstructor from '../hooks/useInstructor';
import Loader from '../shared/Loader';


const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const navigate = useNavigate();

    if (loading || isInstructorLoading) {
        return <Loader/>
    }
    if(user && isInstructor){
        return children
    }
    return navigate("/")
};

export default InstructorRoute;