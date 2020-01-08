import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="my-navbar">
      <NavLink to="/" exact>
        O mnie
      </NavLink>

      <NavLink to="/projects">Projekty</NavLink>
    </div>
  );
};

export default Navbar;
