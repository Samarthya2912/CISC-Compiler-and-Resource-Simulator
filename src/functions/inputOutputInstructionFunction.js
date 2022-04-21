import bitset from "../bitset";

const inputOutputInstructionFunction = (instruction, currentState) => {
    currentState.registers["IR"].copy(instruction);
    let instruction_str = instruction.to_string();

    if(instruction_str === bitset.hex2bin("F080").to_string()) {
        currentState.registers.INTERRUPT.set();
    }
    else if(instruction_str === bitset.hex2bin("F040").to_string()) {
        currentState.registers.INTERRUPT.clear();
    }
    else if(instruction_str === bitset.hex2bin("F200").to_string()) {
        if(currentState.registers["FGI"].to_bool()) {
            currentState.registers["PC"].add(bitset.hex2bin("001"));
        }
    }
    else if(instruction_str === bitset.hex2bin("F100").to_string()) {
        if(currentState.registers["FGO"].to_bool()) {
            currentState.registers["PC"].add(bitset.hex2bin("001"));
        }
    }
    else if(instruction_str === bitset.hex2bin("F800").to_string()) {
        currentState.registers["AC"].copy(currentState.registers["INPR"]);
    }
    else if(instruction_str === bitset.hex2bin("F400").to_string()) {
        currentState.registers["OUTR"] = currentState.registers["AC"];
        currentState.registers["FGO"].set();
    }

    currentState.registers["PC"].add(bitset.hex2bin("001"));
    return currentState;
}

export default inputOutputInstructionFunction;