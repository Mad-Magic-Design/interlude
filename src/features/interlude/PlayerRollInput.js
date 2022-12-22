
import {Box, Container} from "@mui/system"
import { TextField, FormControlLabel, Button, ToggleButton, ToggleButtonGroup } from "@mui/material"

import { useState } from "react";

export default function PlayerRollInput(props) {
  const handleSubmit = (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const number= data.get('number')
    const sides= data.get('sides')
    const modifier= data.get('modifier')
    const result = makeRoll(number, sides, modifier)
    let success = false
    if (props.type==='skill' && result >= props.DC) success = true
    props.makeRoll({
      number, sides, modifier, result, success,
      type: props.type,
    })
}

const makeRoll = (number, sides, modifier) =>{
  let roll=0
  for (let i; i<=number; i++){
    roll += Math.floor(Math.random(0, sides)) + +1
    
  }
  roll += modifier
  return roll
}

return (
<Container>
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="number"
          label="Number of Dice"
          name="number"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="sides"
          label="Die Sides"
          name="sides"
          
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="modifier"
          label="modifier"
          name="modifier"
          defaultValue={0}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Roll
        </Button>
        </Box>
</Container>
)
}
