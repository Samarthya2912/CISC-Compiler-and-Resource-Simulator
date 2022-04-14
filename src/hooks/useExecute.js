import React from "react";
import { useContext } from "react";
import { resourceContext } from "../contexts/resources";
import getNewMachineState from "../functions/newMachineState";

const useExecute = () => {
  const [resources, setResources] = useContext(resourceContext);

  const setNewMachineState = () => {
    let index = resources.registers['PC'].to_decimal();
    let [i,j] = [Math.floor(index/8),index%8]
    const machine_code = resources['MEMORY'][i][j];
    const newMachineState = getNewMachineState(machine_code,resources);
    if(newMachineState) setResources(newMachineState);
  };

  return setNewMachineState;
};

export default useExecute;
