import React from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const navigator = useNavigate();

  if (localStorage.getItem("name") && localStorage.getItem("image")) {
    return children;
  } else {
    return <Navigate to="/authorization" />;
  }
};

export default Auth;
