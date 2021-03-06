class bitset {
    constructor(size) {
        this.size = size;
        this.bitarray = [];
        for(let i = 0; i < this.size; i++) {
            this.bitarray.push(0);
        }
    }

    to_string() {
        let str = "";
        this.bitarray.forEach((bit,index) => str += bit+(index%4 === 3 && index !== this.size-1?" ":""));
        return str;
    }

    set() {
        for(let i = 0; i < this.size; i++) {
            this.bitarray[i] = 1;
        }
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

    to_hex() {
        return parseInt(this.to_decimal(), 2).toString(16).toUpperCase();
    }

    clear() {
        for(let i = 0; i < this.size; i++) {
            this.bitarray[i] = 0;
        }
    }

    complement() {
        for(let i = 0; i < this.size; i++) {
            this.bitarray[i] = 1-this.bitarray[i];
        }
    }

    circulate_right() {
        let last_bit = this.bitarray[this.size-1];
        for(let i = this.size-1; i > 0; i--) {
            this.bitarray[i] = this.bitarray[i-1];
        }
        this.bitarray[0] = last_bit;
    }

    circulate_left() {
        let first_bit = this.bitarray[0];
        for(let i = 0; i < this.size-1; i++) {
            this.bitarray[i] = this.bitarray[i+1];
        }
        this.bitarray[this.size-1] = first_bit;
    }

    add(b) {
        let carry = 0, sum = 0;
        for(let i = this.size-1; i >= 0; i--) {
            sum = carry+this.bitarray[i]+b.bitarray[i];
            carry = Math.floor(sum/2);
            this.bitarray[i] = sum%2;
        }
    }

    to_bool() {
        if(this.size !== 1) throw new Error("Unexpected call().");
        return this.bitarray[0] === 1;
    }

    isNegative() {
        return this.bitarray[0] === 1;
    }

    isZero() {
        for(let i = 0; i < this.size; i++) {
            if(this.bitarray[i] === 1) return false;
        }
        return true;
    }

    isPositive() {
        return !this.isZero() && (this.bitarray[0] === 0);
    }

    to_decimal() {
        let val = 0, mul = 1;
        for(let i = this.size-1; i >= 0; i--) {
            val += mul*this.bitarray[i];
            mul *= 2;
        }
        return val;
    }

    and(b) {
        for(let i = 0; i < this.size; i++) {
            if(this.bitarray[i] === 1 && b.bitarray[i] === 1) this.bitarray[i] = 1;
            else this.bitarray[i] = 0;
        }
    }

    or(b) {
        for(let i = 0; i < this.size; i++) {
            if(this.bitarray[i] === 1 || b.bitarray[i] === 1) this.bitarray[i] = 1;
            else this.bitarray[i] = 0;
        }
    }

    append(b) {
        this.size += b.size;
        for(let i = 0; i < b.size; i++) {
            this.bitarray.push(b.bitarray[i]);
        }
    }

    subbitset(i,j) {
        let newbitset = new bitset(j);
        for(let k = 0; k < j; k++) {
            let temp = this.bitarray[k+i]
            newbitset.bitarray[k] = temp;
        }
        return newbitset;
    }

    copy(b) {
        this.size = b.size;
        this.bitarray = [...b.bitarray];
    }

    createCopy() {
        const b = new bitset(this.size);
        b.bitarray = [...this.bitarray];
        return b;
    }
};

export default bitset;