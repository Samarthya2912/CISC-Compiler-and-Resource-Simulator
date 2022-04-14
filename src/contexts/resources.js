import { createContext, useState } from "react";
import bitset from "../bitset";

export const resourceContext = createContext();

export default function ResourceContextProvider(props) {
  const rows = 16;
  const cols = 8;
  const memory_arr = [];
  for (let i = 0; i < rows; i++) {
    memory_arr.push([]);
    for (let j = 0; j < cols; j++) {
      memory_arr[i].push(new bitset(16));
    }
  }

  const [resources, setResources] = useState({
    registers: {
      AR: new bitset(16),
      PC: new bitset(16),
      DR: new bitset(16),
      AC: new bitset(16),
      INPR: new bitset(16),
      IR: new bitset(16),
      TR: new bitset(16),
      OUTR: new bitset(16),
      E: new bitset(1)
    },
    MEMORY: memory_arr,
  });

  return (
    <resourceContext.Provider value={[resources, setResources]}>
      {props.children}
    </resourceContext.Provider>
  );
}
