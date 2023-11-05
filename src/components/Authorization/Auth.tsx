import React from "react";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  if (localStorage.getItem("name") && localStorage.getItem("image")) {
    return children;
  } else {
    return <Navigate to="/authorization" />;
  }
};

export default Auth;
