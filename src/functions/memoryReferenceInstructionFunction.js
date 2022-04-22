import bitset from "../bitset";

let memoryReferenceInstructionFunction = (instruction, currentState) => {
  let wordIndex = (addressIndex) => [
    Math.floor(addressIndex / 8),
    addressIndex % 8,
  ];
  let opcode = instruction.to_string().substr(0, 4);
  let opcodebits = instruction.subbitset(0, 4);
  let address = instruction.subbitset(4, 12);

  currentState.registers["IR"].copy(instruction);
  currentState.registers["AR"].copy(address);

  if (opcodebits.to_decimal() > 6) {
    let addressIndex = currentState.registers["AR"].to_decimal();
    let [i, j] = wordIndex(addressIndex);
    currentState.registers["AR"].copy(
      currentState.MEMORY[i][j].subbitset(4, 12)
    );
    opcode = "0" + opcode.substr(1, 3);
  }

  if (opcode === "0000" || opcode === "0001") {
    let addressIndex = currentState.registers["AR"].to_decimal();
    let [i, j] = wordIndex(addressIndex);
    currentState.registers["DR"].copy(currentState.MEMORY[i][j]);
    if (opcode === "0000")
      currentState.registers["AC"].and(currentState.registers["DR"]);
    else currentState.registers["AC"].add(currentState.registers["DR"]);
  } else if (opcode === "0010") {
    let addressIndex = currentState.registers["AR"].to_decimal();
    let [i, j] = wordIndex(addressIndex);
    currentState.registers["DR"].copy(currentState.MEMORY[i][j]);
    currentState.registers["AC"].copy(currentState.registers["DR"]);
  } else if (opcode === "0011") {
    let addressIndex = currentState.registers["AR"].to_decimal();
    let [i, j] = wordIndex(addressIndex);
    currentState.MEMORY[i][j].copy(currentState.registers["AC"]);
  } else if (opcode === "0100") {
    currentState.registers["AR"].to_decimal();
    currentState.registers["PC"].copy(currentState.registers["AR"]);
  } else if (opcode === "0101") {
    /* for phase 2 */
  } else if (opcode === "0110") {
    let addressIndex = currentState.registers["AR"].to_decimal();
    let [i, j] = wordIndex(addressIndex);
    currentState.registers["DR"].copy(currentState.MEMORY[i][j]);
    currentState.registers["AC"].copy(currentState.MEMORY[i][j]);
    currentState.registers["AC"].add(bitset.hex2bin("0001"));
    if (currentState.registers["AC"].isZero()) {
      currentState.registers["PC"].add(bitset.hex2bin("001"));
    }
  } else alert("Error in memoryReferenceInstructionFunction.");

  if (opcode !== "0100" && opcode !== "0101")
    currentState.registers["PC"].add(bitset.hex2bin("001"));
  return currentState;
};

export default memoryReferenceInstructionFunction;
