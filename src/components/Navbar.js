import React from "react";
import ActionButtons from "./ActionButtons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
    <nav className="navbar">
      <div className="main-header">BISC Compiler, Debugger & Hardware Simulator</div>
    </nav>
    <ActionButtons />
    </header>
  );
};

export default Navbar;

