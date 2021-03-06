import bitset from "../bitset";

const mp = {};

/* memory reference instructions */
mp["AND"] = bitset.hex2bin("0");
mp["ADD"] = bitset.hex2bin("1");
mp["LDA"] = bitset.hex2bin("2");
mp["STA"] = bitset.hex2bin("3");
mp["BUN"] = bitset.hex2bin("4");
mp["BSA"] = bitset.hex2bin("5");
mp["ISZ"] = bitset.hex2bin("6");
mp["AND*"] = bitset.hex2bin("8");
mp["ADD*"] = bitset.hex2bin("9");
mp["LDA*"] = bitset.hex2bin("A");
mp["STA*"] = bitset.hex2bin("B");
mp["BUN*"] = bitset.hex2bin("C");
mp["BSA*"] = bitset.hex2bin("D");
mp["ISZ*"] = bitset.hex2bin("E");

/* register reference instructions */
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

/* input output instructions */
mp["INP"] = bitset.hex2bin("F800");
mp["OUT"] = bitset.hex2bin("F400");
mp["SKI"] = bitset.hex2bin("F200");
mp["SKO"] = bitset.hex2bin("F100");
mp["ION"] = bitset.hex2bin("F080");
mp["IOF"] = bitset.hex2bin("F040");

/* delimiter */
mp[""] = bitset.hex2bin("0000");

export default mp;
