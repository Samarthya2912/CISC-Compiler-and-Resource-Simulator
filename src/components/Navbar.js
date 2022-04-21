import React from "react";
import { Link } from "react-router-dom";
import ActionButtons from "./ActionButtons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ActionButtons />
    </nav>
  );
};

export default Navbar;

