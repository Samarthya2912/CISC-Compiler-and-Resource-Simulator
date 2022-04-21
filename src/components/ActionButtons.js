import { ButtonGroup, Button, Alert } from "@mui/material";
import React, { useContext } from "react";
import useResources from "../hooks/useCompile";
import useExecute from "../hooks/useExecute";
import { codeContext } from "../contexts/code";
import { editorContext } from "../contexts/editor";

const ActionButtons = () => {
  const [code] = useContext(codeContext);
  const [error, allocateMemory] = useResources();
  const [setNewMachineState, resetMachine] = useExecute();
  const [, setOpen] = useContext(editorContext);


  return (
    <>
      <ButtonGroup variant="contained" sx={{ margin: "15px", marginLeft: "10vw", borderColor: "white" }}>
        <Button variant="text" onClick={() => setOpen(true)} sx={{ color: "white" }}>Open Editor</Button>
        <Button variant="text" onClick={() => allocateMemory(code)} sx={{ color: "white" }}>
          COMPILE
        </Button>
        <Button
          variant="text"
          sx={{ color: "white" }}
          onClick={() => {
            setNewMachineState();
          }}
        >
          NEXT INSTRUCTION
        </Button>
        <Button variant="text" onClick={resetMachine} sx={{ color: "white" }}>
          RESET
        </Button>
      </ButtonGroup>
      {error && <Alert severity="error">Compilation error: {error}</Alert>}
    </>
  );
};

export default ActionButtons;
