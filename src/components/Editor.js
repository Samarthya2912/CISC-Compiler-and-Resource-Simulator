import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import compile from "../functions/compile";
import "./Editor.css";

const Editor = () => {
  const [code, setCode] = useState("");

  return (
    <div className="container">
      <TextField
        placeholder="Type code here..."
        multiline
        rows={20}
        style={{ minWidth: "400px" }}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></TextField>
      <Button
        variant="contained"
        onClick={() => {
          compile(code);
        }}
        style={{ margin: "10px" }}
      >
        Compile
      </Button>
    </div>
  );
};

export default Editor;
