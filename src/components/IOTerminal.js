import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { iointerfacecontext } from "../contexts/io-interface-context";
import { resourceContext } from "../contexts/resources";
import useIO from "../hooks/useIO";
import CustomHeader from "./CustomHeader";

const IOTerminal = () => {
  const [iointerfacestate] =
    useContext(iointerfacecontext);
  const [resources] = useContext(resourceContext);
  const [inputChangeHandler] = useIO();

  return (
    <div style={{ margin: "20px 0" }}>
      <CustomHeader>Input Output Interface</CustomHeader>
      <div style={{ padding: "20px", border: "solid black 1px"  }}>
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
      </div>
    </div>
  );
};

export default IOTerminal;
