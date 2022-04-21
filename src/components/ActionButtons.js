import { ButtonGroup, Button, Alert } from "@mui/material";
import React, { useContext } from "react";
import useResources from "../hooks/useCompile";
import useExecute from "../hooks/useExecute";
import { codeContext } from "../contexts/code";

const ActionButtons = () => {
  const [code] = useContext(codeContext);
  const [error, allocateMemory] = useResources();
  const [setNewMachineState, resetMachine] = useExecute();

  return (
    <>
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="contained" onClick={() => allocateMemory(code)}>
            Compile
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setNewMachineState();
            }}
          >
            Next Instruction
          </Button>
          <Button variant="outlined" onClick={resetMachine}>
            RESET COMPUTER
          </Button>
        </ButtonGroup>
      </ButtonGroup>
      {error && <Alert severity="error">Compilation error: {error}</Alert>}
    </>
  );
};

export default ActionButtons;
