import { createContext } from "react";
import { useState, useEffect } from "react";

export const ActContext = createContext()

export const ActProvider = (props) =>{
    const defaultActDoc = {
        creator: '',
        creatorId: '',
        stage: 'new', //new, rollAvail, rolled, completed
        action: '',
        rollInstruction: {
            description:'', 
            type: 'skill',
            DC: 15,
        },
        roll:{
            type: '',
            numberOfDice: 1,
            sides: 20,
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

    const updateActField = (field, data) =>{
        let newStage = actDoc.stage
        if (field==='rollInstruction') newStage = 'rollAvail'
        if (field==='roll') newStage = 'rolled' 
       // if (field==='rolled' && actDoc.dmSays !=='' && actDoc.playerSays !=='') newStage= 'completed'

        const newAct = {...actDoc, [field]:data, stage:newStage}
        setActDoc(newAct)
        props.updateDoc(newAct, actIndex)
    }


    return (
        <ActContext.Provider value={{
            actDoc, updateActField
        }}>
            {props.children}
        </ActContext.Provider>

    )
}
