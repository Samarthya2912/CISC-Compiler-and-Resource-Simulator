import bitset from "../bitset";

let memoryReferenceInstructionFunction = (instruction,currentState) => {
  let opcode = instruction.to_string().substr(0,4);
  let address = instruction.subbitset(4,12);
  console.log(address.to_string());

  currentState.registers["IR"].copy(instruction);
  currentState.registers["AR"].copy(address);

  console.log("yaha ddekho",address,currentState.registers["AR"]);
  

  let wordIndex = (addressIndex) => [Math.floor(addressIndex/8),addressIndex%8];

  if(opcode === "0000" || opcode === "0001") {
    let addressIndex = currentState.registers["AR"].to_decimal();
    let [i,j] = wordIndex(addressIndex);
    currentState.registers["DR"].copy(currentState.MEMORY[i][j]);
    if(opcode === "0000") currentState.registers["AC"].and(currentState.registers["DR"]);
    else currentState.registers["AC"].add(currentState.registers["DR"]);
  } 
  else if(opcode === "0010") {
    let addressIndex = currentState.registers["AR"].to_decimal();
    let [i,j] = wordIndex(addressIndex);
    currentState.registers["DR"].copy(currentState.MEMORY[i][j]);
    currentState.registers["AC"].copy(currentState.registers["DR"]);
  } 
  else if(opcode === "0011") {
    console.log("here");
    let addressIndex = currentState.registers["AR"].to_decimal();
    console.log({ar:currentState.registers["AR"].to_string(),addressIndex});
    let [i,j] = wordIndex(addressIndex);
    currentState.MEMORY[i][j].copy(currentState.registers["AC"]);
    console.log({i,j,mem:currentState.MEMORY[i][j]});
  }

  currentState.registers["PC"].add(bitset.hex2bin("001"));
  return currentState;
}

export default memoryReferenceInstructionFunction;