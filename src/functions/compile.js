import mp from "../utils/translation_map";

export default function compile(code) {
    console.log(code);
    const lines = code.split(";");
    const instructions = lines.map(line => line.replace(/\s+/g,' ').trim());
    const machine_code = instructions.map(instruction => {
        return mp[instruction];
    })

    console.log(machine_code);
}