export default function compile(code) {
    console.log(code);
    const lines = code.split(";");
    const instructions = lines.map(line => line.replace(/\s+/g,' ').trim());
}