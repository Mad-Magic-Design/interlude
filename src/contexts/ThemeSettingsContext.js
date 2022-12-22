import { createContext, useState } from "react";

export const ThemeSettingsContext = createContext()

export const ThemeSettingProvider = (props) =>{
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const toggleTheme = () => setIsDarkTheme(prev => (!prev))
    const [page, setPage] = useState ('home')
    const [interludeId, setInterludeId] = useState()
    const [trashMode, setTrashMode] = useState(false)


    return(
    <ThemeSettingsContext.Provider value={{isDarkTheme, toggleTheme, page, interludeId, trashMode, setPage, setInterludeId, setTrashMode}}>
        {props.children}
    </ThemeSettingsContext.Provider>
)
}