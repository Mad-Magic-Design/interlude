import { createContext } from "react";
import { useState } from "react";
import {getInterlude, createInterlude, updateField, createAct, updateAct} from '../network/interlude'

export const InterludeContext = createContext ()

export const InterludeProvider = (props) =>{
    const [interludeDoc, setInterludeDoc] = useState({
        id: '',
        acts: [],
        creator: '',
        partyName: '',
        isOpen: true,
    })

    const getInterludeDoc = () =>{
        getInterlude(interludeDoc.id)
        .then((res)=>setInterludeDoc(res.data.interludeDoc))
    }

    const updateInterludeField = (field, info) =>{
        updateField(interludeDoc.id, field, info)
        .then((res)=>setInterludeDoc(res.data.interludeDoc))
    }

    const pushAct = (act) =>{
        createAct(interludeDoc.id, act)
        .then((res)=>setInterludeDoc(res.data.interludeDoc))
    }

    const updateInterludeAct = (act, index) =>{
        updateAct(interludeDoc.id, act, index)
        .then((res)=>setInterludeDoc(res.data.interludeDoc))
    }


    return (
        <InterludeContext.Provider value ={{
            getInterlude,
            updateInterludeAct,
            pushAct,
            updateInterludeField,
            getInterludeDoc,
        }}>
            {props.children}
        </InterludeContext.Provider>
    )
}
