
import {Box, Container} from "@mui/system"
import { TextField, FormControlLabel, Button, ToggleButton, ToggleButtonGroup } from "@mui/material"

import { useState } from "react";
import roll from "../../utils/roller.ts";

export default function PlayerRollInput(props) {
  const handleSubmit = (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const number= data.get('number')
    const sides= data.get('sides')
    const modifier= data.get('modifier')
    const result = roll(number, sides, Number(modifier))
    let success = false
    console.log('roll Intrucutcin', props.rollInstruction)
    if (props.rollInstruction.type==='check' && result >= props.rollInstruction.DC) success = true
    props.makeRoll({
      number, sides, modifier, result, success,
      type: props.rollInstruction.type,
    })
}

return (
<Container>
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="number"
          label="Number of Dice"
          name="number"
          autoFocus
          type='number'
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="sides"
          label="Die Sides"
          name="sides"
          type='number'
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="modifier"
          label="modifier"
          name="modifier"
          type='number'
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
