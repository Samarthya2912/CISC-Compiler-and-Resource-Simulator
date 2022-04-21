import React, { useContext } from "react";
import { Alert, Button, ButtonGroup, TextField } from "@mui/material";
import "./Editor.css";
import useResources from "../hooks/useCompile";
import useExecute from "../hooks/useExecute";
import { codeContext } from "../contexts/code";

const Editor = () => {
  const [code, setCode] = useContext(codeContext);
  const [error, allocateMemory] = useResources();
  const [setNewMachineState, resetMachine] = useExecute();

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
    </div>
  );
};

export default Editor;
