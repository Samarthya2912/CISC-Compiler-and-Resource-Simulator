import { Button } from "@mui/material";
import React, { useContext } from "react";
import { editorContext } from "../contexts/editor";

const OpenEditorButton = () => {
  const [, setOpen] = useContext(editorContext);

  return <Button onClick={() => setOpen(true)}>Open Editor</Button>;
};

export default OpenEditorButton;
