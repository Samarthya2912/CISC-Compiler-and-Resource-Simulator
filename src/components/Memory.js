import React from "react";
import "./Memory.css"
import bitset from "../bitset";

const rows = 16, cols = 8;
const memory = [];
for (let i = 0; i < rows; i++) {
    memory.push([]);
    for(let j = 0; j < cols; j++) {
        memory[i].push(new bitset(16));
    }
}

const Memory = () => {
  return (
    <div className="memory">
      {memory.map((row, row_index) => (
        <div className="row" key={row_index}>
          {row.map((word, col_index) => (
            <div key={col_index} className="word">
              {word.to_string()}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Memory;
