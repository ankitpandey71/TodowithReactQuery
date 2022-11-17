import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <h1>Welcome {localStorage.getItem("usernamekey")}</h1>
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/signin">SignIn</Link>
      <Link to="/signout">SignOut</Link>
    </div>
  </div>
);

export default Navbar;
