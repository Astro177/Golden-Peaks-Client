import React from "react";
import { NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import DashBoardOptions from "../../components/DashBoardOptions/DashBoardOptions";

const DashBoard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-outline drawer-button lg:hidden mt-10 mx-5"
          >
            <VscThreeBars />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content flex flex-col items-center justify-center">
            {/* Sidebar content here */}
            <DashBoardOptions />
          </ul>
        </div>
      </div>
        <div className="mx-auto flex items-center justify-center">
            <p className="text-5xl text-cyan-600 font-bold">Welcome To Your Dashboard</p>
        </div>
    </div>
  );
};

export default DashBoard;
