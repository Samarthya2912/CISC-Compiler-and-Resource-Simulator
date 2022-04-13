import React, { useContext } from "react";
import "./Memory.css";
import bitset from "../bitset";
import { resourceContext } from "../contexts/resources";
import { Button } from "@mui/material";

// const rows = 16, cols = 8;
// const memory = [];
// for (let i = 0; i < rows; i++) {
//     memory.push([]);
//     for(let j = 0; j < cols; j++) {
//         memory[i].push(new bitset(16));
//     }
// }

const Memory = () => {
  const [resources,setResources] = useContext(resourceContext);


  return (
    <>
      <div className="memory">
        {resources["MEMORY"].map((row, row_index) => (
          <div className="row" key={row_index}>
            {row.map((word, col_index) => (
              <div key={col_index} className="word">
                {word.to_string()}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* strictly for testing purpose */}
      {/* <Button variant="contained" onClick={() => {
        const updateResources = {...resources}; // clone the object to avoid copying by reference
        updateResources['MEMORY'][0][0] = bitset.hex2bin("7800");
        setResources(updateResources);
      }}>Update 0th word</Button> */}
    </>
  );
};

export default Memory;
