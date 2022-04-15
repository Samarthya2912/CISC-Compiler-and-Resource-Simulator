/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import bitset from "../bitset";

const memoryReferenceInstructionFunction = (instruction, currentState) => {
  currentState.registers["IR"] = instruction;
  currentState.registers["AR"] = instruction.subbitset(5, instruction.size - 5);

  let addressIndex = 0,
    i = 0,
    j = 0;

  let opcode = instruction.to_string().substr(0, 4);

  switch (opcode) {
    case bitset.hex2bin("0").to_string():
      addressIndex = currentState.registers["AR"].to_decimal();
      [i, j] = [Math.floor(addressIndex / 8), addressIndex % 8];
      currentState.registers["DR"] = currentState["MEMORY"][i][j];
      currentState.registers["AC"].and(currentState.registers["DR"]);
      break;

    case bitset.hex2bin("1").to_string():
      addressIndex = currentState.registers["AR"].to_decimal();
      [i, j] = [Math.floor(addressIndex / 8), addressIndex % 8];
      currentState.registers["DR"] = currentState["MEMORY"][i][j];
      currentState.registers["AC"].add(currentState.registers["DR"]);
      break;

    case bitset.hex2bin("2").to_string():
      addressIndex = currentState.registers["AR"].to_decimal();
      [i, j] = [Math.floor(addressIndex / 8), addressIndex % 8];
      currentState.registers["DR"] = currentState["MEMORY"][i][j];
      currentState.registers["AC"] = currentState.registers["DR"];
      break;

    case bitset.hex2bin("3").to_string():
      addressIndex = currentState.registers["AR"].to_decimal();
      [i, j] = [Math.floor(addressIndex / 8), addressIndex % 8];
      currentState.registers["DR"] = currentState.registers["AC"];
      currentState["MEMORY"][i][j] = currentState.registers["DR"];
      break;

    default:
      console.log("default");
      break;
  }

  currentState.registers["PC"].add(bitset.hex2bin("001"));
  return currentState;
};

// mp["AND"] = bitset.hex2bin("0000");
// mp["ADD"] = bitset.hex2bin("1000");
// mp["LDA"] = bitset.hex2bin("2000");
// mp["STA"] = bitset.hex2bin("3000");
// mp["BUN"] = bitset.hex2bin("4000");
// mp["BSA"] = bitset.hex2bin("5000");
// mp["ISZ"] = bitset.hex2bin("6000");
// mp["AND*"] = bitset.hex2bin("8000");
// mp["ADD*"] = bitset.hex2bin("9000");
// mp["LDA*"] = bitset.hex2bin("A000");
// mp["STA*"] = bitset.hex2bin("B000");
// mp["BUN*"] = bitset.hex2bin("C000");
// mp["BSA*"] = bitset.hex2bin("D000");
// mp["ISZ*"] = bitset.hex2bin("E000");

export default memoryReferenceInstructionFunction;
