import { useContext, useEffect, useState } from "react";
import bitset from "../bitset";
import { resourceContext } from "../contexts/resources";
import mp from "../utils/translation_map";

export default function useResources() {
  const [resources, setResources] = useContext(resourceContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(resources);
  }, [resources]);

  const allocateMemory = (code) => {
    const lines = code.split(";");
    const instructions = lines.map((line) => line.replace(/\s+/g, " ").trim());
    const machine_code = instructions.map((instruction_line) => {
      let [instruction, arg] = instruction_line.split(" ");
      let translated_code = mp[instruction];

      // if (
      //   mp[instruction] === undefined ||
      //   mp[instruction] === null ||
      //   (translated_code.size === 4 && (arg !== undefined && arg.length !== 3)) ||
      //   (translated_code.size === 16 && (arg !== undefined && arg.length !== 0))
      // ) {
      //   setError(`"${instruction}" not recognized.`);
      // }

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
      updatedMemoryArr[i][j] = machine_code[index];
    }

    if (!error) setResources({ ...resources, MEMORY: updatedMemoryArr });
  };

  return [error, allocateMemory];
}
