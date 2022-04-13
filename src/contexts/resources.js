import { createContext, useState } from "react";
import bitset from "../bitset";

export const resourceContext = createContext();

export default function ResourceContextProvider(props) {
  const rows = 16;
  const cols = 8;
  const memory_arr = Array(rows).fill(Array(cols).fill(new bitset(16)));

  const [resources, setResources] = useState({
    AR: new bitset(16),
    PC: new bitset(16),
    DR: new bitset(16),
    AC: new bitset(16),
    INPR: new bitset(16),
    IR: new bitset(16),
    TR: new bitset(16),
    OUTR: new bitset(16),
    MEMORY: memory_arr,
  });

  return (
    <resourceContext.Provider
      value={[resources, setResources]}
    >{props.children}</resourceContext.Provider>
  );
}
