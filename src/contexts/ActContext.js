import { createContext } from "react";
import { useState, useEffect } from "react";

export const ActContext = createContext()

export const ActProvider = (data, props) =>{
    const defaultActDoc = {
        creator: '',
        state: 'new',
        action: '',
        rollInstruction: {
            type: 'skill',
            DC: 15,
        },
        roll:{
            type: '',
            numberOfDice: 1,
            dieType: 20,
            modifier: 0,
            result: 0,
            success: false,
        },
        dmSays: '',
        playerSays: '',
        index: 1,
    }
    
    const [actDoc, setActDoc] = useState(data)

    useEffect(()=>{
        setActDoc(data)
    }, [data])

    return (
        <ActContext.Provider value={{
            actDoc,
        }}>
            {props.children}
        </ActContext.Provider>

    )
}
