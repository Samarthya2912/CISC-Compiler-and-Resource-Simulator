import { createContext, useState } from "react";

export const inputOutputContext = createContext();

export default function InputOutputContextProvider(props) {
  const [io, setIo] = useState({ input: "", output: "" });
  return (
    <inputOutputContext.Provider value={[io, setIo]}>
      {props.children}
    </inputOutputContext.Provider>
  );
}
