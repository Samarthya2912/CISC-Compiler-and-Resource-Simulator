import bitset from "../bitset";

const memoryReferenceInstructionFunction = (instruction, currentState) => {
  const one = bitset.hex2bin("0001");
  currentState.registers["IR"] = instruction;

  switch(instruction.to_string()) {}

  currentState.registers["PC"].add(one);
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
