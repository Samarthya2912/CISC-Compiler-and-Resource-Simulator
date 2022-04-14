import { Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { resourceContext } from "../contexts/resources";

const Registers = () => {
  const [{ registers }] = useContext(resourceContext);
  console.log(Object.keys(registers));

  return (
    <Paper style={{minWidth: "400px"}}>
      <h1>Registers</h1>
      <div>
        {Object.keys(registers).map((register) => (
          <Typography key={register}>
            {register}: {registers[register].to_string()}
          </Typography>
        ))}
      </div>
    </Paper>
  );
};

export default Registers;
