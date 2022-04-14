import React, { useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import "./Editor.css";
import useResources from "../hooks/useResources";

const Editor = () => {
  const [code, setCode] = useState("");
  const [error, allocateMemory] = useResources();

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
      <Button variant="contained" onClick={() => allocateMemory(code)}>
        Compile
      </Button>
      {error && <Alert severity="error">Compilation error: {error}</Alert>}
    </div>
  );
};

export default Editor;
