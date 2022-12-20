import { Container, Box, fontFamily} from "@mui/system"
import { FormControl, InputLabel, Input, FormHelperText, TextField, Button } from "@mui/material"
import {InterludeContext} from '../../contexts/InterludeContext'
import { UserContext } from "../../contexts/UserContext"
import { useContext } from "react"
import { useState } from "react"

export default function NewAct() {
  const {createAct} = useContext(InterludeContext)
  const [actValue, setActValue] = useState('')
  const {userDoc} = useContext(UserContext)
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    createAct(data.get('act'), userDoc.username)
    setActValue('')
  }
  return (
    <Container>
       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        
          <TextField
          id='act'
          label='What is your act for this interlude?'
          name='act'
          value={actValue}
          onChange={(newValue) => {
            setActValue(newValue.target.value)}}
          fullWidth
          multiline
          rows={4}
          
          
          />
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
            
      </Box>
    </Container>
  )
}
