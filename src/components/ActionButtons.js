import { Button, Alert } from "@mui/material";
import React, { useContext } from "react";
import useResources from "../hooks/useCompile";
import useExecute from "../hooks/useExecute";
import { codeContext } from "../contexts/code";
import { editorContext } from "../contexts/editor";
import { runningModeContext } from "../contexts/running_mode";
import { debugStateContext } from "../contexts/debug-state";

const ActionButtons = () => {
  const [code] = useContext(codeContext);
  const [error, allocateMemory] = useResources();
  const [setNewMachineState, resetMachine, continue_running] = useExecute();
  const [, setOpen] = useContext(editorContext);
  const [runningMode] = useContext(runningModeContext);
  const [debugMode] = useContext(debugStateContext);

  return (
    <div style={{ backgroundColor: "#ab46d2" }}>
        <Button variant="text" onClick={() => setOpen(true)} sx={{ color: "white", margin: "0 15px" }}>
          Open Editor
        </Button>
        <Button variant="text" onClick={() => allocateMemory(code)} sx={{ color: "white", margin: "0 15px" }} disabled={runningMode || debugMode || code === ""}>
          COMPILE
        </Button>
        <Button variant="text" onClick={continue_running} sx={{ color: "white", margin: "0 15px" }} disabled={debugMode}>
          RUN
        </Button>
        <Button
          variant="text" sx={{ color: "white", margin: "0 15px" }}
          onClick={() => {
            setNewMachineState();
          }}
          disabled={runningMode}
        >
          DEBUG: STEP
        </Button>
        <Button variant="text" onClick={resetMachine} sx={{ color: "white", margin: "0 15px" }}>
          RESET
        </Button>
      {error && <Alert severity="error">Compilation error: {error.message}</Alert>}
    </div>
  );
};

export default ActionButtons;
