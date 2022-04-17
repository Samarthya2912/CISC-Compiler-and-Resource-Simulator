import { useContext, useState } from "react";
import { resourceContext } from "../contexts/resources";
import getNewMachineState from "../functions/getNewMachineState";
import bitset from "../bitset";

const useExecute = () => {
  const [resources, setResources] = useContext(resourceContext);

  const setNewMachineState = () => {
    let index = resources.registers["PC"].to_decimal();
    let [i, j] = [Math.floor(index / 8), index % 8];
    const machine_code = resources["MEMORY"][i][j];
    const newMachineState = getNewMachineState(machine_code, resources);
    if (newMachineState) setResources(newMachineState);
  };

  const resetMachine = () => {
    let newMachineState = { ...resources, MEMORY: [...resources.MEMORY] };

    for (let register in resources.registers) {
      newMachineState.registers[register].clear();
    }

    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 8; j++) {
        newMachineState.MEMORY[i][j].clear();
      }
    }

    setResources(newMachineState);
  };

  return [setNewMachineState, resetMachine];
};

export default useExecute;
