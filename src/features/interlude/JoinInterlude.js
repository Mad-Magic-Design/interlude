import {Box, Container} from "@mui/system"
import { TextField, FormControlLabel, Button } from "@mui/material"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getInterlude } from "../../network/interlude";
import {updateUser} from '../../network/user'
import { useNavigate } from "react-router-dom";


export default function JoinInterlude() {
    const {pushUserField} = useContext(UserContext)
    const navigate = useNavigate()
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log('data id', data.get('interludeid'))
        getInterlude(data.get('interludeid'))
        .then((res)=>{
          const interlude = res.data.interlude
          console.log('interlude back', interlude)
          pushUserField('joinedInterludes', {
            id: interlude._id,
            title: interlude.title,
            partyName: interlude.partyName,
          })
          
          navigate(`/home/interlude/${interlude._id}`)
        })
        .catch((err)=>console.log('error joining interlude', err))
          
      
    }
  return (
    <Container sx={{
      backgroundColor: 'primary.main'
    }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="interludeid"
              label="Interlude Code"
              name="interludeid"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Join
            </Button>
            </Box>
    </Container>
  )
}
