import { useContext, useState } from "react";
import { resourceContext } from "../contexts/resources";
import mp from "../utils/translation_map";

export default function useResources() {
  const [resources, setResources] = useContext(resourceContext);
  const [error, setError] = useState(null);

  const allocateMemory = (code) => {
    console.log(code);
    const lines = code.split(";");
    const instructions = lines.map((line) => line.replace(/\s+/g, " ").trim());
    const machine_code = instructions.map((instruction) => {
      if (mp[instruction] === undefined || mp[instruction] === null) {
        setError(`"${instruction}" not recognized.`);
      }
      return mp[instruction];
    });

    const rows = 16;
    const cols = 8;
    let updatedMemoryArr = [];
    for (let i = 0; i < rows; i++) {
      updatedMemoryArr.push([]);
      for (let j = 0; j < cols; j++) {
        console.log(resources.MEMORY[i][j].to_string());
        updatedMemoryArr[i].push(resources.MEMORY[i][j]);
      }
    }

    console.log({ updatedMemoryArr });
    for (let index = 0; index < machine_code.length; index++) {
      let [i, j] = [Math.floor(index / cols), index % cols];
      updatedMemoryArr[i][j] = machine_code[index];
    }

    if (!error) setResources({ ...resources, MEMORY: updatedMemoryArr });
  };

  return [error, allocateMemory];
}
