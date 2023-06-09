import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import DashBoardOptions from "../../components/DashBoardOptions/DashBoardOptions";
import { AuthContext } from "../../provider/Authprovider";

const DashBoard = () => {
  const{user}=useContext(AuthContext)
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <label
            htmlFor="my-drawer-2"
            className="btn btn-outline drawer-button lg:hidden mt-10 mx-5"
          >
            <VscThreeBars />
          </label>
        <div className="drawer-content mx-auto flex-col items-center justify-center my-container">
          <p className="text-5xl font-bold text-center mb-32">
            Welcome To Your Dashboard <br />  <span className="text-color">{user?.displayName}</span>
          </p>  
            <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content flex flex-col items-center justify-center font-semibold text-lg">
            <DashBoardOptions />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
