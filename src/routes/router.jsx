import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import DashBoard from "../pages/DashBoard/DashBoard";
import DashBoardLayOut from "../layout/DashBoardLayOut";
import SelectedClasses from "../pages/DashBoard/SelectedClasses";
import EnrolledClasses from "../pages/DashBoard/EnrolledClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayOut />,
    children: [
      // {
      //   path: "/dashboard",
      //   element: <DashBoard />,
      // },
      {
        path: "/dashboard/selected-classes",
        element: <SelectedClasses/>,
      },
      {
        path: "/dashboard/enrolled-classes",
        element: <EnrolledClasses/>,
      }
    ],
  },
]);
