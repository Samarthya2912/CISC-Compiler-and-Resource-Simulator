import memoryReferenceInstructionFunction from "./memoryReferenceInstructionFunction";
import regsiterReferenceInstructionFunction from "./registerReferenceInstructionFunction";
import inputOutputInstructionFunction from "./inputOutputInstructionFunction";

const getNewMachineState = (instruction, currentState) => {
  // if(instruction.to_string() === bitset.hex2bin("0000").to_string()) return null;

  let newMachineState = { ...currentState, MEMORY: [...currentState.MEMORY] };
  let opcode = instruction.to_string().substr(0, 4);
  if (opcode === "0111") {
    /* register reference instruction */
    newMachineState = regsiterReferenceInstructionFunction(
      instruction,
      newMachineState
    );
  } else if (opcode === "1111") {
    /* input-output instruction */
    newMachineState = inputOutputInstructionFunction(
      instruction,
      newMachineState
    );
  } else {
    /* memory reference instruction */
    newMachineState = memoryReferenceInstructionFunction(
      instruction,
      newMachineState
    );
  }

  return newMachineState;
};

export default getNewMachineState;
