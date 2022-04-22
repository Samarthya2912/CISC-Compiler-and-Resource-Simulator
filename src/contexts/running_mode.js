import { createContext, useState } from "react";

export const runningModeContext = createContext();

export default function RunningModeContextProvider({ children }) {
  const [runningMode, setRunningMode] = useState(false);

  return (
    <runningModeContext.Provider value={[runningMode, setRunningMode]}>
      {children}
    </runningModeContext.Provider>
  );
}
