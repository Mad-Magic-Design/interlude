import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"

import { Box} from "@mui/system"
import { Paper, Container, Typography, Button, Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import NewMenu from "./NewMenu";
import { ThemeSettingsContext } from "../../contexts/ThemeSettingsContext"
import ConfirmModal from "../../components/ConfirmModal"

export default function InterludeMenu() {
  const [newMenu, setNewMenu] = useState( {
    open: false,
    anchorEl: null
  })
  const {userDoc, updateUserDocField} = useContext(UserContext)
  const navigate=useNavigate()
  const {setPage, trashMode, setTrashMode} = useContext(ThemeSettingsContext)

  useEffect(()=>{
    setPage('home')
  }, [])

  const handleNewClick = (e) =>{
    setNewMenu ({
      open: true,
      anchorEl: e.currentTarget
    })
    console.log(e.currentTarget)
  }


  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [toDelete, setToDelete] = useState()
  const confirmDelete = () => {
    setDeleteModalOpen(false)
    let interludes
    toDelete.isCreated?
    interludes = [...userDoc.createdInterludes]
    :interludes = [...userDoc.joinedInterludes]
    const newInterludes = interludes.filter(interlude => interlude !== toDelete.interlude)
    toDelete.isCreated?
    updateUserDocField('createdInterludes', newInterludes)
    :updateUserDocField('joinedInterludes', newInterludes)
    setTrashMode(false)
  }

  const handleDeleteClick = (interlude, isCreated) =>{
    console.log('delete clicke', interlude, isCreated)
    setToDelete({interlude, isCreated})
    setDeleteModalOpen(true)
  }

  const handleMenuClose = () =>{
    console.log('got hereber')
    setNewMenu({open: false,
      anchorEl: null})
  }

 
  return (
    <Paper>
      <Container disableGutters sx={{
        mt:4,
        backgroundColor: 'primary.main',
        position: 'relative',
        borderRadius: 2,
        boxShadow: "2px 2px 2px #661009, -2px -2px 2px #8a160c"
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
        p:3,
        borderRadius: 2,
      boxShadow: "2px 2px 2px #1f0f36, -2px -2px 2px #29154a;"
      }}>
        {trashMode?
        <>
        {userDoc.createdInterludes.map((interlude, i)=>
         <>
         <Button key={i} onClick={()=>handleDeleteClick(interlude, true)} sx={{backgroundColor:'primary.light', mb:1, boxShadow: 9}} fullWidth >{<DeleteIcon/>}  {interlude.title}</Button>
         </>
         )}
        {userDoc.joinedInterludes.map((interlude, i)=>
         <Button key={i} onClick={()=>handleDeleteClick(interlude, false)} sx={{backgroundColor:'primary.dark', mb:1 , boxShadow: 9}} fullWidth>{<DeleteIcon/>}  {interlude.title}</Button>)}
        </>
        :
        <>
        {userDoc.createdInterludes.map((interlude, i)=>
         <Button key={i} onClick={()=>navigate(`/home/interlude/${interlude.id}`)} sx={{backgroundColor:'primary.light', mb:1, boxShadow: 3}} fullWidth>{interlude.title}</Button>)}
        {userDoc.joinedInterludes.map((interlude, i)=>
         <Button key={i} onClick={()=>navigate(`/home/interlude/${interlude.id}`)} sx={{backgroundColor:'primary.dark', mb:1, boxShadow: 3}} fullWidth>{interlude.title}</Button>)}
        </>
        }
      </Container>
      {newMenu.open && <NewMenu handleClose={handleMenuClose} anchorEl={newMenu.anchorEl}/>}
      {deleteModalOpen && <ConfirmModal handleClose={()=>setDeleteModalOpen(false)} confirmDelete={confirmDelete} />}
    </Paper>
  )
}
