import { createContext, useState } from "react";

export const codeContext = createContext();

export default function CodeContextProvider(props) {
    const state = useState("");

    return <codeContext.Provider value={state}>{props.children}</codeContext.Provider>
}