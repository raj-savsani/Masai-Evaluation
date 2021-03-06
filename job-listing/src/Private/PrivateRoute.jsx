import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth";

function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);
  if (!token) {
    // console.log("children:", children.type.name);
    return <Navigate to="/login" />;
  }

  return children;
}
export default PrivateRoute;
