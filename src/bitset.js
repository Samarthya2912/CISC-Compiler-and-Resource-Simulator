class bitset {
    constructor(size) {
        this.size = size;
        this.bitarray = Array(size).fill(0);
    }

    to_string() {
        let str = "";
        this.bitarray.forEach((bit,index) => str += bit+(index%4 === 3?" ":""));
        return str;
    }

    set(index, val = 1) {
        if(index < 0 || index >= this.size) throw new Error("Out of range error");
        this.bitarray[this.size-1-index] = val; 
    }

    static hex2bin(hex) {
        let str = (parseInt(hex, 16).toString(2)).padStart(4*hex.length, '0');
        let b = new bitset(4*hex.length);
        for(let i = 0; i < str.length; i++) {
            if(str[i] === "0") b.bitarray[i] = 0;
            else b.bitarray[i] = 1;
        }
        return b;
    }

    hex2bin(hex) {
        let str = (parseInt(hex, 16).toString(2)).padStart(4*hex.length, '0');
        for(let i = 0; i < str.length; i++) {
            if(str[i] === "0") this.bitarray[i] = 0;
            else this.bitarray[i] = 1;
        }
    }
};

// let b = new bitset(16);
// b.hex2bin("A7800");
// b = bitset.hex2bin("7800");
// console.log(b.to_string());

export default bitset;