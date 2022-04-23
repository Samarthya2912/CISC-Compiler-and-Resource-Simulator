import { useContext, useEffect, useState } from "react";
import bitset from "../bitset";
import { resourceContext } from "../contexts/resources";
import mp from "../utils/translation_map";

export default function useResources() {
  const [resources, setResources] = useContext(resourceContext);
  const [error, setError] = useState(null);

  const allocateMemory = (code) => {
    const lines = code.split(";");
    const instructions = lines.map((line) => line.replace(/\s+/g, " ").trim());
    const machine_code = instructions.map((instruction_line) => {
      let [instruction, arg] = instruction_line.split(" ");
      let translated_code = new bitset(0);

      if(mp[instruction] === null || mp[instruction] === undefined) {
        setError(new Error(`Unrecognized instruction error at ${instruction}`));
      }

      translated_code.copy(mp[instruction]);
      
      if(translated_code !== undefined && ((translated_code.size === 4 && arg.length !== 3) || !(translated_code.size === 16 && arg === undefined))) {
        setError(new Error(`Argument parsing error at ${instruction}: args: ${arg}`));
      }

      if (translated_code.size === 4) {
        translated_code.append(bitset.hex2bin(arg));
      }

      return translated_code;
    });

    const rows = 16;
    const cols = 8;

    let updatedMemoryArr = [];
    for (let i = 0; i < rows; i++) {
      updatedMemoryArr.push([]);
      for (let j = 0; j < cols; j++) {
        updatedMemoryArr[i].push(resources.MEMORY[i][j]);
      }
    }

    for (let index = 0; index < machine_code.length; index++) {
      let [i, j] = [Math.floor(index / cols), index % cols];
      updatedMemoryArr[i][j].copy(machine_code[index]);
    }

    if (error === null) setResources({ ...resources, MEMORY: updatedMemoryArr });
  };

  return [error, allocateMemory];
}
