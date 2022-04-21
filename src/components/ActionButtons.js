import { ButtonGroup, Button, Alert } from "@mui/material";
import React, { useContext } from "react";
import useResources from "../hooks/useCompile";
import useExecute from "../hooks/useExecute";
import { codeContext } from "../contexts/code";
import OpenEditorButton from "./OpenEditorButton";

const ActionButtons = () => {
  const [code] = useContext(codeContext);
  const [error, allocateMemory] = useResources();
  const [setNewMachineState, resetMachine] = useExecute();

  return (
    <>
      <ButtonGroup sx={{ margin: "15px" }}>
        <OpenEditorButton />
        <Button variant="text" onClick={() => allocateMemory(code)}>
          COMPILE
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setNewMachineState();
          }}
        >
          NEXT INSTRUCTION
        </Button>
        <Button variant="text" onClick={resetMachine}>
          RESET
        </Button>
      </ButtonGroup>
      {error && <Alert severity="error">Compilation error: {error}</Alert>}
    </>
  );
};

export default ActionButtons;
