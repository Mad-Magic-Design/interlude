import {Box, Container} from "@mui/system"
import { TextField, FormControlLabel, Button, ToggleButton, ToggleButtonGroup } from "@mui/material"

import { useState } from "react";

export default function SetRoll(props) {
    const [alignment, setAlignment] = useState('check');

   
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        props.setRoll({
          description: data.get('description'),
          type: alignment,
          DC: data.get('DC')
        })
    }

    const handleAlignmentChange = (event, newAlignment) =>{
      if (newAlignment !== null) {
        setAlignment(newAlignment)
      }
    }
  return (
    <Container>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="instructions"
              name="description"
              autoFocus
            />
           
           <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleAlignmentChange}
                aria-label="Type of Roll"
                >
                <ToggleButton value="check">Check</ToggleButton>
                <ToggleButton value="table">Table</ToggleButton>
            </ToggleButtonGroup>

            {alignment==='check' && <TextField
              margin="normal"
              required
              fullWidth
              id="DC"
              label="DC"
              name="DC"
              type="number"
            />}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Set Roll
            </Button>
            </Box>
    </Container>
  )
}
