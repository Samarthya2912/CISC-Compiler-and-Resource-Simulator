import React, { useContext } from "react";
import "./Memory.css";
import bitset from "../bitset";
import { resourceContext } from "../contexts/resources";
import { Button } from "@mui/material";
import CustomHeader from "./CustomHeader";

const Memory = () => {
  const [resources] = useContext(resourceContext);

  return (
    <>
      <div className="memory" style={{ margin: "20px 0" }}>
        <CustomHeader>Memory</CustomHeader>
        {resources["MEMORY"].map((row, row_index) => (
          <div className="row" key={row_index}>
            {row.map((word, col_index) => (
              <div
                key={row_index*8+col_index}
                className="word"
                style={{ backgroundColor: (resources.registers['PC'].to_decimal() === row_index*8+col_index)?"skyblue":"", fontSize: "14.5px" }}
              >
                {word.to_string()}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Memory;
