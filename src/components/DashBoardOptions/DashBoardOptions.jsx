import React from 'react';
import { NavLink } from 'react-router-dom';

const DashBoardOptions = () => {
    return (
        <>
             <li>
              <NavLink to="/">My Selected Classes</NavLink>
            </li>
             <li>
              <NavLink to="/">My Enrolled Classes</NavLink>
            </li>
             <li>
              <NavLink to="/">Payment</NavLink>
            </li>
            <hr className='divider'/>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
        </>
    );
};

export default DashBoardOptions;