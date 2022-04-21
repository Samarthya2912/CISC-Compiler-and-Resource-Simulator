import bitset from "../bitset";

const regsiterReferenceInstructionFunction = (instruction, currentState) => {
  let one = bitset.hex2bin("0001");
  currentState.registers["IR"] = instruction;

  const instruction_str = instruction.to_string();
  switch (instruction_str) {
    case bitset.hex2bin("7800").to_string():
      currentState.registers["AC"].clear();
      break;
    case bitset.hex2bin("7400").to_string():
      currentState.registers["E"].clear();
      break;
    case bitset.hex2bin("7200").to_string():
      currentState.registers["AC"].complement();
      break;
    case bitset.hex2bin("7100").to_string():
      currentState.registers["E"].complement();
      break;
    case bitset.hex2bin("7080").to_string():
      currentState.registers["AC"].circulate_right();
      break;
    case bitset.hex2bin("7040").to_string():
      currentState.registers["AC"].circulate_left();
      break;
    case bitset.hex2bin("7020").to_string():
      currentState.registers["AC"].add(one);
      break;
    case bitset.hex2bin("7010").to_string():
      if (currentState.registers["AC"].isPositive())
        currentState.registers["PC"].add(bitset.hex2bin("001"));
      break;
    case bitset.hex2bin("7008").to_string():
      if (currentState.registers["AC"].isNegative())
        currentState.registers["PC"].add(bitset.hex2bin("001"));
      break;
    case bitset.hex2bin("7004").to_string():
      if (currentState.registers["AC"].isZero())
        currentState.registers["PC"].add(bitset.hex2bin("001"));
      break;
    case bitset.hex2bin("7002").to_string():
      if (currentState.registers["E"].isZero())
        currentState.registers["PC"].add(bitset.hex2bin("001"));
      break;
    case bitset.hex2bin("7001").to_string():
      currentState = null;
      return currentState;
    default:
      break;
  }
  currentState.registers["PC"].add(bitset.hex2bin("001"));
  return currentState;
};

/*
mp["CLA"] = bitset.hex2bin("7800");
mp["CLE"] = bitset.hex2bin("7400");
mp["CMA"] = bitset.hex2bin("7200");
mp["CME"] = bitset.hex2bin("7100");
mp["CIR"] = bitset.hex2bin("7080");
mp["CIL"] = bitset.hex2bin("7040");
mp["INC"] = bitset.hex2bin("7020");
mp["SPA"] = bitset.hex2bin("7010");
mp["SNA"] = bitset.hex2bin("7008");
mp["SZA"] = bitset.hex2bin("7004");
mp["SZE"] = bitset.hex2bin("7002");
mp["HLT"] = bitset.hex2bin("7001");
 */

export default regsiterReferenceInstructionFunction;
