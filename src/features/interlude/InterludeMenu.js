import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"

import { Box} from "@mui/system"
import { Paper, Container, Typography, Button, Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

import NewMenu from "./NewMenu";

export default function InterludeMenu() {
  const [newMenu, setNewMenu] = useState( {
    open: false,
    anchorEl: null
  })
  const {userDoc} = useContext(UserContext)
  const navigate=useNavigate()

  const handleNewClick = (e) =>{
    setNewMenu ({
      open: true,
      anchorEl: e.currentTarget
    })
    console.log(e.currentTarget)
  }

  const handleNewClose = () =>{

  }

  return (
    <Paper>
      <Container disableGutters sx={{
        backgroundColor: 'primary.main',
        position: 'relative'
      }}>
        <Fab onClick={handleNewClick}
          sx={{
          position:'absolute',
          top:-28,
          left:-28,
          backgroundColor: 'secondary.main'
        }}><AddIcon/></Fab>
        <Typography align="center" variant='h6'>Interludes</Typography>
      </Container>
      <Container sx={{
        p:3
      }}>

        {userDoc.createdInterludes.map((interlude)=>
         <Button onClick={()=>navigate(`/home/interlude/${interlude.id}`)} sx={{backgroundColor:'primary.light', mb:1}} fullWidth>{interlude.title}</Button>)}
    
        
       
      </Container>
      {newMenu.open && <NewMenu anchorEl={newMenu.anchorEl}/>}
    </Paper>
  )
}
