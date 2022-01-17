import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/clientlogin">Apply for Job</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/listjob">List Job</Link>
    </div>
  );
}

export default Navbar;
