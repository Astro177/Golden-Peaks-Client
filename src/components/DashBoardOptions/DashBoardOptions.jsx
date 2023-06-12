import { NavLink, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAttachMoney } from "react-icons/md";
import { toast } from "react-hot-toast";
import ThemeChange from "../ThemeChange/ThemeChange";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const DashBoardOptions = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleLogOut = () => {
    logOut();
    toast.success("Successfully logged out");
    navigate("/");
  };
  return (
    <>
      {/* student dashboard options */}
      <li>
        <NavLink to="/dashboard/selected-classes">
          <HiOutlineAcademicCap className="text-2xl" />
          <span>My Selected Classes</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/enrolled-classes">
          <SiGoogleclassroom className="text-2xl" />
          <span>My Enrolled Classes</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <MdAttachMoney className="text-2xl" />
          <span>Payment History</span>
        </NavLink>
      </li>

      {/* instructor dashboard option */}
      {isInstructor && (
        <>
          <li>
            <NavLink to="/dashboard/addClass">
              <HiOutlineAcademicCap className="text-2xl" />
              <span>Add a Class</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myClasses">
              <HiOutlineAcademicCap className="text-2xl" />
              <span>My Classes</span>
            </NavLink>
          </li>
        </>
      )}

      {/* admin dashboard option */}
      {isAdmin && (
        <>
          <li>
            <NavLink to="/dashboard/manageClass">
              <HiOutlineAcademicCap className="text-2xl" />
              <span>Manage Classes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageUsers">
              <HiOutlineAcademicCap className="text-2xl" />
              <span>Manage Users</span>
            </NavLink>
          </li>
        </>
      )}
      <hr className="divider" />
      <li>
        <NavLink to="/">
          <AiOutlineHome className="text-2xl" />
          <span>Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/">
          <img src={user?.photoURL} alt="" className="w-8 h-8 rounded-full" />
          <span className="font-semibold">Profile</span>
        </NavLink>
      </li>
      <li>
        <ThemeChange />
      </li>
      <hr className="divider" />
      <li onClick={handleLogOut}>
        <NavLink to="/">
          <span className="flex gap-2 font-semibold">
            <GrLogout className="text-2xl" />
            <span>Log Out</span>
          </span>
        </NavLink>
      </li>
    </>
  );
};

export default DashBoardOptions;
