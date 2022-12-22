import { createContext } from "react";
import { useState, useEffect } from "react";
import {getUserDoc, updateUser, pushUser} from '../network/user'

export const UserContext = createContext ()
  

export const UserProvider = (props) =>{
    const [userDoc, setUserDoc] = useState({
        id: '',
        username: '',
        createdInterludes: [],
        joinedInterludes: [],
        options: {}
    })

    useEffect(()=>{
        if (userDoc.id === '' && localStorage.getItem('interludeDoc')) setUserDoc(JSON.parse(localStorage.getItem('interludeDoc')))
    }, [userDoc])

    const handleUserDoc = (newUserDoc) =>{
        setUserDoc(newUserDoc)
        localStorage.setItem('interludeUser', JSON.stringify({newUserDoc}))
    }

    const getUser = () =>{
        getUserDoc(userDoc.id)
        .then((res)=>setUserDoc(res.data.userDoc))
    }

    const updateUserField = (field, info) =>{
        updateUser(userDoc.id, field, info)
        .then((res)=>{
            console.log('returned doc in context', res.data.userDoc)
            setUserDoc(res.data.userDoc)
        })
    }

    const pushUserField = (field, info) =>{
        /*pushUser(userDoc.id, field, info)
        .then((res)=>{
            console.log('doc in context', res.data.userDoc)
            setUserDoc(res.data.userDoc)})*/
        const doc = {...userDoc}
        doc[field] = [...doc[field], info]
        console.log('pushed doc in context', doc)
        updateUserField('userDoc', doc)
    }


    return (
        <UserContext.Provider value ={{
            userDoc,
            setUserDoc,
            handleUserDoc,
            getUser,
            updateUserField,
            pushUserField,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}


