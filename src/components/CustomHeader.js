import React from "react";

const CustomHeader = (props) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        minWidth: "100%",
        overflow: "hidden",
        backgroundColor: "dodgerblue",
        color: "white",
        fontSize: "larger",
        display: "flex",
        padding: "10px",
        boxSizing: "border-box",
        margin: "0"
      }}
    >
      {props.children}
    </div>
  );
};

export default CustomHeader;
