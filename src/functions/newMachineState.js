import bitset from "../bitset";
import regsiterReferenceInstructionFunction from "./registerReferenceInstructionFunction";

const getNewMachineState = (instruction, currentState) => {
  if(instruction.to_string() === bitset.hex2bin("0000").to_string()) return null;

  let newMachineState = { ...currentState, MEMORY: [...currentState.MEMORY] };
  newMachineState = regsiterReferenceInstructionFunction(
    instruction.to_string(),
    newMachineState
  );
  return newMachineState;
};

export default getNewMachineState;
