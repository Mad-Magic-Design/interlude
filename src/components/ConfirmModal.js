import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material"
import { useState } from "react"


export default function ConfirmModal(props) {
  const [open, setOpen] = useState(true)
  const handleClose = () =>{

  }

  const handleConfirm = () =>{
    props.confirmDelete()
  }

  return (
    <Dialog onClose={props.handleClose} open={open}>
      <DialogTitle>Remove Interlude?</DialogTitle>
      
      <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={handleConfirm} autoFocus>
            Remove
          </Button>
        </DialogActions>
    </Dialog>
  )
}
