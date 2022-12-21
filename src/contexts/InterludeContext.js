import { createContext } from "react";
import { useState, useEffect } from "react";
import {getInterlude, createInterlude, updateField,  updateAct} from '../network/interlude'

export const InterludeContext = createContext ()

export const InterludeProvider = (props) =>{
   /* const [interludeDoc, setInterludeDoc] = useState({
        id: '',
        acts: [],
        creator: '',
        partyName: '',
        isOpen: true,
    })*/

    const [interludeDoc, setInterludeDoc] = useState(props.data)
   

    useEffect(()=>{
        setInterludeDoc(props.data)
    }, [props.data])

    const getInterludeDoc = () =>{
        getInterlude(interludeDoc._id)
        .then((res)=>setInterludeDoc(res.data.interludeDoc))
    }

    const updateInterludeField = (field, info) =>{
        console.log('inter', interludeDoc)
        updateField(interludeDoc._id, field, info)
        .then((res)=>setInterludeDoc(res.data.interlude))
    }

    const createAct = (act, username, id) =>{
        const newAct = {
            creator: username,
            creatorId: id,
            action: act,
            stages: 'new', 
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
        const acts = [...interludeDoc.acts, newAct]
        updateInterludeField('acts', acts)
    }

    const pushAct = (act) =>{
        createAct(interludeDoc.id, act)
        .then((res)=>setInterludeDoc(res.data.interludeDoc))
    }

    const updateInterludeAct = (act, index) =>{
        const newActs = [...interludeDoc.acts]
        newActs[index] = act
        //const newDoc = {...interludeDoc, acts: newActs}
        updateField(interludeDoc._id, 'acts', newActs)
        .then((res)=>{
            console.log('response', res.data.interlude)
            setInterludeDoc(res.data.interlude)
        })
        
    }


    return (
        <InterludeContext.Provider value ={{
           interludeDoc,
            getInterlude,
            updateInterludeAct,
            pushAct,
            updateInterludeField,
            getInterludeDoc,
            createAct,
        }}>
            {props.children}
        </InterludeContext.Provider>
    )
}
