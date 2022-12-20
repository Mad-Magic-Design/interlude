import { createContext } from "react";
import { useState, useEffect } from "react";

export const ActContext = createContext()

export const ActProvider = (props) =>{
    const defaultActDoc = {
        creator: '',
        creatorId: '',
        stages: 'new', //new, rollAvail, rolled, completed
        action: '',
        rollInstruction: {
            description:'', 
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
    }
    
    const [actDoc, setActDoc] = useState(props.data)
    const [actIndex, setActIndex] = useState(props.index)

    useEffect(()=>{
        setActDoc(props.data)
    }, [props.data])
    useEffect(()=>{
        setActIndex(props.index)
    }, [props.index])



    return (
        <ActContext.Provider value={{
            actDoc,
        }}>
            {props.children}
        </ActContext.Provider>

    )
}
