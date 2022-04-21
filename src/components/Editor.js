import React, { useContext } from "react";
import { Alert, Backdrop, Button, ButtonGroup, TextField } from "@mui/material";
import "./Editor.css";
import useResources from "../hooks/useCompile";
import useExecute from "../hooks/useExecute";
import { codeContext } from "../contexts/code";
import { editorContext } from "../contexts/editor";

const Editor = () => {
  const [code, setCode] = useContext(codeContext);
  const [open, setOpen] = useContext(editorContext);

  return (
    <Backdrop open={open} onClick={() => setOpen(false)} sx={{ zIndex: 5 }}>
      <div
        className="container"
        zIndex={15}
        style={{ minWidth: "400px", background: "white", borderRadius: "5px", overflow: "hidden" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ background: "dodgerblue", width: "100%", color: "white", fontSize: "larger", display: "flex", padding: "10px", boxSizing: "border-box" }}>Editor</div>
        <TextField
          placeholder="Type code here..."
          multiline
          rows={20}
          value={code}
          style={{ minWidth: "400px", background: "white" }}
          onChange={(e) => setCode(e.target.value)}
        ></TextField>
      </div>
    </Backdrop>
  );
};

export default Editor;
