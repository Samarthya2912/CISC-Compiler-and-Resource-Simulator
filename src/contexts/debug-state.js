import { createContext, useState } from "react";

export const debugStateContext = createContext();

export default function DebugStateContextProvider({ children }) {
  const [debugState, setDebugState] = useState(false);

  return (
    <debugStateContext.Provider value={[debugState,setDebugState]}>
      {children}
    </debugStateContext.Provider>
  );
}
