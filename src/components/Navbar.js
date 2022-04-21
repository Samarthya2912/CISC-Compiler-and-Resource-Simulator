import React from "react";
import ActionButtons from "./ActionButtons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div style={{ color: "white" }}>BISC Compiler, Debugger & Hardware Simulator</div>
      <ActionButtons />
    </nav>
  );
};

export default Navbar;

