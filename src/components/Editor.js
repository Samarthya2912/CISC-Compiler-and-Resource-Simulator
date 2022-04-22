import React, { useContext } from "react";
import { Backdrop, TextField } from "@mui/material";
import "./Editor.css";
import { codeContext } from "../contexts/code";
import { editorContext } from "../contexts/editor";
import CustomHeader from "./CustomHeader";

const Editor = () => {
  const [code, setCode] = useContext(codeContext);
  const [open, setOpen] = useContext(editorContext);

  return (
    <Backdrop open={open} onClick={() => setOpen(false)} sx={{ zIndex: 5 }}>
      <div
        className="container"
        style={{ minWidth: "400px", background: "white", borderRadius: "5px", overflow: "hidden", zIndex: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CustomHeader>Editor</CustomHeader>
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
