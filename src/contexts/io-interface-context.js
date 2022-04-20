import { createContext, useState } from "react";

export const iointerfacecontext = createContext();

export default function IOContextProvider(props) {
  const [iointerfacestate, setIOinterfaceState] = useState({
    inp: "",
    out: "",
  });

  return (
    <iointerfacecontext.Provider
      value={[iointerfacestate, setIOinterfaceState]}
    >
      {props.children}
    </iointerfacecontext.Provider>
  );
}
