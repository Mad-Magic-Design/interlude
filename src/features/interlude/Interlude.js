import { useContext, useEffect } from "react"
import { InterludeContext } from "../../contexts/InterludeContext"
import { UserContext } from "../../contexts/UserContext"
import {ActProvider} from '../../contexts/ActContext'
import { ThemeSettingsContext } from "../../contexts/ThemeSettingsContext"

import NewAct from "./NewAct"
import Act from "./Act"

import { Box } from "@mui/system"
import { Container, Typography, Paper } from "@mui/material"



export default function Interlude() {
    const {interludeDoc, updateInterludeAct} = useContext(InterludeContext)
    const {userDoc} = useContext(UserContext)
    const {setPage, setInterludeId} = useContext(ThemeSettingsContext)
    const isOwned = userDoc.createdInterludes.map(inter=>inter.id).includes(interludeDoc._id)

    useEffect(()=>{
      setPage('interlude')
      setInterludeId(interludeDoc._id)
    }, [])

  return (
    <>
      <Container  maxWidth='md' sx={{
        borderTopRightRadius:2,
        borderTopLeftRadius: 2,
        backgroundColor: 'primary.main'
      }}>
       
        <Typography textAlign='center' variant="h6">{interludeDoc.title}</Typography>
        <Typography textAlign='center' variant="h6">~</Typography>
        <Typography variant="body1">{interludeDoc.description}</Typography>
        <Typography textAlign='center' variant="h6">~</Typography>
        <Typography sx={{color: 'secondary.main'}} variant="body1">Interlude: {interludeDoc.prompt}</Typography>
        
      </Container>
      <Container sx={{}} maxWidth='md' disableGutters>
      <Paper 
      sx={{
        pt:1,
        borderRadius:0,
        backgroundColor: 'secondary.dark'}}>
      {!isOwned && <NewAct/>}
      </Paper>
    </Container>
    <Container maxWidth='md' disableGutters>
      <Paper sx={{
         borderTopRightRadius:0,
         borderTopLeftRadius:0,
        backgroundColor: 'secondary.dark',
        p:1
      }}>
        {interludeDoc.acts.map((act, index)=> 
          <ActProvider key={index} updateDoc={updateInterludeAct} index={index} data={act}><Act key={index} isOwned={isOwned}/></ActProvider>
          )}
      </Paper>
    </Container>
    </>
  )
}
