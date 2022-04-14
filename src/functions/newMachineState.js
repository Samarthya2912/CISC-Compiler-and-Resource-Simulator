import bitset from "../bitset";

const getNewMachineState = (instruction, currentState) => {
  let newMachineState = { ...currentState, MEMORY: [...currentState.MEMORY] };
  newMachineState.registers['AR'] = bitset.hex2bin("7777");
  return newMachineState;
};

export default getNewMachineState;
