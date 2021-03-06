import { useContext } from "react";
import bitset from "../bitset";
import { iointerfacecontext } from "../contexts/io-interface-context";
import { resourceContext } from "../contexts/resources";

export default function useIO() {
    const [resources,setResources] = useContext(resourceContext);
    const [iointerfacestate,setIOinterfacestate] = useContext(iointerfacecontext);

    /*
    useEffect(() => {
        console.log(iointerfacestate);
    }, [iointerfacestate])
    */

    const inputChangeHandler = (e) => {
        if(e.target.value.length > 4) return;

        let newiostate = {...iointerfacestate};
        let newresourcesstate = {...resources, MEMORY: [...resources.MEMORY]};
        newiostate.inp = e.target.value;
        if(e.target.value.length === 4) {
            newresourcesstate.registers["FGI"].set();
        };
        setIOinterfacestate(newiostate);
        setResources(newresourcesstate);
    }

    const getInput = () => {
        let newiostate = {...iointerfacestate};
        let newresourcesstate = {...resources, MEMORY: [...resources.MEMORY]};
        newresourcesstate.registers["INPR"].copy(bitset.hex2bin(newiostate.inp));
        newresourcesstate.registers["FGI"].clear();
        newresourcesstate.registers["INTERRUPT"].clear();
        newiostate.inp = "";
        setResources(newresourcesstate);
        setIOinterfacestate(newiostate);
    }

    const getOutput = () => {
        let newiostate = {...iointerfacestate};
        let newresourcesstate = {...resources, MEMORY: [...resources.MEMORY]};
        newiostate.out = newresourcesstate.registers["OUTR"].to_decimal();
        newresourcesstate.registers["FGO"].clear();
        newresourcesstate.registers["INTERRUPT"].clear();

        setResources(newresourcesstate);
        setIOinterfacestate(newiostate);
    } 

    return [inputChangeHandler,getInput,getOutput,iointerfacestate,setIOinterfacestate]
}