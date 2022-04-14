import React, { useState } from "react";
import { Alert, Button, ButtonGroup, TextField } from "@mui/material";
import "./Editor.css";
import useResources from "../hooks/useResources";
import useExecute from "../hooks/useExecute";

const Editor = () => {
  const [code, setCode] = useState("");
  const [error, allocateMemory] = useResources();
  const setNewMachineState = useExecute();

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
      <ButtonGroup>
        <Button variant="contained" onClick={() => allocateMemory(code)}>
          Compile
        </Button>
        <Button variant="contained" onClick={() => {setNewMachineState()}}>
          Run next instruction
        </Button>
      </ButtonGroup>
      {error && <Alert severity="error">Compilation error: {error}</Alert>}
    </div>
  );
};

export default Editor;
