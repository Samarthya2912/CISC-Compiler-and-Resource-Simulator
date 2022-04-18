import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { inputOutputContext } from "../contexts/inputoutput";
import { resourceContext } from "../contexts/resources";

const IOTerminal = () => {
  const [io, setIo] = useContext(inputOutputContext);
  const [resources, setResources] = useContext(resourceContext)

  const inputChangeHandler = () => {
      let newresources = {...resources };
      newresources.registers["FGI"].set()
  };

  const outputChangeHandler = () => {};

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Input"
        variant="outlined"
        value={io.input}
        onChange={inputChangeHandler}
      />
      <hr />
      <TextField
        id="outlined-basic"
        label="Output"
        variant="outlined"
        value={io.output}
        onChange={outputChangeHandler}
      />
    </>
  );
};

export default IOTerminal;
