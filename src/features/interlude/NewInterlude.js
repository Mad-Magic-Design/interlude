import {Box, Container} from "@mui/system"
import { TextField, FormControlLabel, Button } from "@mui/material"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { createInterlude } from "../../network/interlude";
import {updateUser} from '../../network/user'
import { useNavigate } from "react-router-dom";


export default function NewInterlude() {
    const {userDoc, handleUserDoc} = useContext(UserContext)
    const navigate = useNavigate()
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log('userDoc.id', userDoc.id)
        createInterlude(data.get('partyName'), data.get('title'), data.get('description'), data.get('prompt'), userDoc.username, userDoc.id )
        .then((res)=>
        {
            handleUserDoc(res.data.userDoc)
            updateUser(userDoc.id, "userDoc", res.data.userDoc)
            navigate('/home')
            //navigate(`/home/interlude/${res.body.interlude.id}`)
        })
    }
  return (
    <Container>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="party-name"
              label="Party Name"
              name="partyName"
              autoComplete="party name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="title"
              label="Interlude Title"
              id="title"
              autoComplete="title"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description of the time the Interlude takes place"
              id="description"
              autoComplete="description"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="prompt"
              label="Prompt to spur player's acts"
              id="prompt"
              autoComplete="prompt"
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
