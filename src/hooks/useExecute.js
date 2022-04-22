import { useContext, useState } from "react";
import { resourceContext } from "../contexts/resources";
import getNewMachineState from "../functions/getNewMachineState";
import useIO from "./useIO";
import { iointerfacecontext } from "../contexts/io-interface-context";
import bitset from "../bitset";

const useExecute = () => {
  const [resources, setResources] = useContext(resourceContext);
  const [, setIOinterfacestate] = useContext(iointerfacecontext);
  const [, getInput, getOutput] = useIO();

  const setNewMachineState = () => {
    if (resources.registers["INTERRUPT"].to_bool()) {
      if (resources.registers["FGI"].to_bool()) getInput();
      if (resources.registers["FGO"].to_bool()) getOutput();
      return;
    }

    let index = resources.registers["PC"].to_decimal();
    let [i, j] = [Math.floor(index / 8), index % 8];
    const machine_code = new bitset(0); machine_code.copy(resources["MEMORY"][i][j]);
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
    setIOinterfacestate({ inp: "", out: "" });
  };

  return [setNewMachineState, resetMachine];
};

export default useExecute;
