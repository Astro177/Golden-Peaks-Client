/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../provider/Authprovider";
import Swal from "sweetalert2";
import Loader from "../shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }
  if (!user) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You need to log in first!",
    });
    return <Navigate to="/login" replace={true} state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
