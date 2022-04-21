const { createContext, useState } = require("react");

export const editorContext = createContext();

export default function EditorContextProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <editorContext.Provider value={[open, setOpen]}>
      {children}
    </editorContext.Provider>
  );
}
