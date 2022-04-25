import { useContext } from "react";
import { resourceContext } from "../contexts/resources";
import getNewMachineState from "../functions/getNewMachineState";
import useIO from "./useIO";
import { iointerfacecontext } from "../contexts/io-interface-context";
import bitset from "../bitset";
import { runningModeContext } from "../contexts/running_mode";

const useExecute = () => {
  const [resources, setResources] = useContext(resourceContext);
  const [iointerfaceState, setIOinterfacestate] =
    useContext(iointerfacecontext);
  const [, getInput, getOutput] = useIO();
  const [, setRunningMode] = useContext(runningModeContext);

  const setNewMachineState = () => {
    if (resources.registers["INTERRUPT"].to_bool()) {
      if (resources.registers["FGI"].to_bool()) getInput();
      if (resources.registers["FGO"].to_bool()) getOutput();
      return;
    }

    let index = resources.registers["PC"].to_decimal();
    let [i, j] = [Math.floor(index / 8), index % 8];
    const machine_code = new bitset(0);
    machine_code.copy(resources["MEMORY"][i][j]);
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

  const continue_running = () => {
    let currentState = { ...resources, MEMORY: [...resources.MEMORY] };
    let currentioState = { ...iointerfaceState };

    while (true) {
      if(currentState.registers.INTERRUPT.to_bool()) {
        return continue_running_after_io();
      }

      let index = currentState.registers["PC"].to_decimal();
      let [i, j] = [Math.floor(index / 8), index % 8];
      const machine_code = new bitset(0);
      machine_code.copy(resources["MEMORY"][i][j]);
      let newstate = getNewMachineState(machine_code, resources);
      if (newstate !== null) currentState = newstate;
      else break;
    }

    setRunningMode(true);
    setResources(currentState);
    setIOinterfacestate(currentioState);
  };

  const continue_running_after_io = () => {
    let currentState = { ...resources, MEMORY: [...resources.MEMORY] };
    let currentioState = { ...iointerfaceState };
    if(currentState.registers.FGI.to_bool()) {
      currentState.registers.INPR.copy(bitset.hex2bin(currentioState.inp));
      currentState.registers.FGI.clear();
      currentioState.inp = "";
      currentState.registers.INTERRUPT.clear();
    }

    if(currentState.registers.FGO.to_bool()) {
      currentioState.out += "  "+currentState.registers.OUTR.to_decimal();
      currentState.registers.FGO.clear();
      currentState.registers.INTERRUPT.clear();
    }

    setRunningMode(true);
    setResources(currentState);
    setIOinterfacestate(currentioState);
  }

  return [setNewMachineState, resetMachine, continue_running, continue_running_after_io];
};

export default useExecute;
