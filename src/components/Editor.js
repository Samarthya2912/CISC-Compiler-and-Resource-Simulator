import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Editor.css";
import useResources from "../hooks/useResources";
import { resourceContext } from "../contexts/resources";
import { useContext, useEffect } from "react";

const Editor = () => {
  const [code, setCode] = useState("");
  const allocateMemory = useResources();
  const [resources] = useContext(resourceContext);
  useEffect(() => {
    console.log(resources.MEMORY);
  }, [resources.MEMORY]);
  return (
    <div className="container">
      <TextField
        placeholder="Type code here..."
        multiline
        rows={20}
        style={{ minWidth: "400px" }}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></TextField>
      <Button onClick={() => allocateMemory(code)}>Compile</Button>
    </div>
  );
};

export default Editor;
