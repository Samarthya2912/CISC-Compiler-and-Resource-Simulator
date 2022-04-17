import { useContext, useState } from "react";
import { resourceContext } from "../contexts/resources";
import getNewMachineState from "../functions/newMachineState";
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
    const rows = 16;
    const cols = 8;
    const memory_arr = [];
    for (let i = 0; i < rows; i++) {
      memory_arr.push([]);
      for (let j = 0; j < cols; j++) {
        memory_arr[i].push(new bitset(16));
      }
    }

    const initialState = {
      registers: {
        AR: new bitset(12),
        PC: new bitset(12),
        DR: new bitset(16),
        AC: new bitset(16),
        INPR: new bitset(16),
        IR: new bitset(16),
        TR: new bitset(16),
        OUTR: new bitset(16),
        E: new bitset(1),
      },
      MEMORY: memory_arr,
    };
    setResources(initialState);
  };

  return [setNewMachineState,resetMachine];
};

export default useExecute;
