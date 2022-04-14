import React from "react";
import { useContext } from "react";
import { resourceContext } from "../contexts/resources";
import getNewMachineState from "../functions/newMachineState";

const useExecute = () => {
  const [resources, setResources] = useContext(resourceContext);

  const setNewMachineState = (instruction) => {
    let newMachineState = getNewMachineState(instruction, resources);
    setResources(newMachineState);
  };

  return setNewMachineState;
};

export default useExecute;
