import { createContext } from "react";
import { useState } from "react";
import {getUserDoc, updateUser, pushUser} from '../network/user'

export const UserContext = createContext ()
  /*  {
    userDoc: {
        username: '',
        createdInterludes: [],
        joinedInterludes: [],
        options: {}
        }
})*/

export const UserProvider = (props) =>{
    const [userDoc, setUserDoc] = useState({
        id: '',
        username: '',
        createdInterludes: [],
        joinedInterludes: [],
        options: {}
    })

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
        .then((res)=>setUserDoc(res.data.userDoc))
    }

    const pushUserField = (field, info) =>{
        pushUser(userDoc.id, field, info)
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


