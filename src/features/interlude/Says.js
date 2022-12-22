import { Container, Box } from "@mui/system"
import { Typography, TextField, Button } from "@mui/material"

export default function Says(props) {

  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log('what is this FormData biz?', data)
    props.setSays(data.get('says'), props.speaker)
    
  }

  return (
    <>
    {props.input?
      <Container>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="says"
              label={`${props.speaker} says:`}
              name="says"
              autoFocus
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
      :<Container>
        <Typography variant="body2">{props.speaker} says: {props.speaker==="Dm"?props.actDoc.dmSays:props.actDoc.playerSays}</Typography>
      </Container>
  }
    </>
  )
}