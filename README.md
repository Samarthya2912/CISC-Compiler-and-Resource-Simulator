# Computer Organisation and Architecture Project

## About IO
**OUT** sends **AC** data into **OUTR** setting **FGO** to 1 at the same time while **INP** sends **INPR** data into **AC** clearing **FGI** at the same time. The actual interface interactions are done once the **INTERRUPT** is set to one. At least one of **FGI** or **FGO** should be set otherwise the program execution is blocked by the *INTERRUPT* instruction. If both are set input instruction executes first followed by output instruction.

Standard input procedure

 - Trigger **ION**
 - Enter data from interface to **INPR**
 - Execute **INP**

 Example taking input and store at hex 010.

   ` INC;
    ION;
    INP;
    STA 010;
    HLT;`

Standard input procedure

 - Populate **OUTR** from **AC** using **OUT** instruction setting **FGO** to one.
 - Trigger **ION** and output data to interface to **OUTR**

 Example output 6 on interface.

   `INC;INC;INC;INC;INC;INC;
OUT;
ION;
STA 010;
HLT;`
 
