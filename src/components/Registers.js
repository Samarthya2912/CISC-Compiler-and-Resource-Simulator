import { Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { resourceContext } from "../contexts/resources";
import CustomHeader from "./CustomHeader";
import IOTerminal from "./IOTerminal";

const Registers = () => {
  const [{ registers }] = useContext(resourceContext);

  return (
    <>
      <Paper elevation={0} sx={{ margin: "20px 0" }}>
        <CustomHeader>Registers</CustomHeader>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.keys(registers).map((register) => (
              <Typography
                sx={{
                  border: "solid black 1px",
                  minWidth: "100px",
                  padding: "0 10px",
                  boxSizing: "border-box",
                }}
                key={register}
              >
                {register}
              </Typography>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.keys(registers).map((register) => (
              <Typography
                key={register}
                sx={{
                  border: "solid black 1px",
                  minWidth: "100px",
                  padding: "0 10px",
                  boxSizing: "border-box",
                }}
              >
                {registers[register].to_string()}
              </Typography>
            ))}
          </div>
        </div>
        <IOTerminal />
      </Paper>
    </>
  );
};

export default Registers;
