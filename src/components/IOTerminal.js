import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { iointerfacecontext } from "../contexts/io-interface-context";
import { resourceContext } from "../contexts/resources";
import useIO from "../hooks/useIO";

const IOTerminal = () => {
  const [iointerfacestate, setIOinterfacestate] =
    useContext(iointerfacecontext);
  const [resources, setResources] = useContext(resourceContext);
  const [inputChangeHandler, getInput] = useIO();

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Input"
        variant="outlined"
        value={iointerfacestate.inp}
        onChange={inputChangeHandler}
        disabled={false}
        focused={resources.registers["INTERRUPT"].to_bool() && !resources.registers["FGO"].to_bool()}
        sx={{ textTransform: 'capitalize' }}
        inputProps={{
          autoComplete: "off"
        }}
      />
      <hr />
      <TextField
        id="outlined-basic"
        label="Output"
        variant="outlined"
        value={iointerfacestate.out}
        inputProps={{
          autoComplete: "off"
        }}
      />
    </>
  );
};

export default IOTerminal;
