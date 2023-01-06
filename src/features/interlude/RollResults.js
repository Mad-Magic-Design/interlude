import { Container } from "@mui/system"
import { Typography } from "@mui/material"

export default function RollResults(props) {
  const roll = props.actDoc.roll
  return (
    <Container disableGutters>
      <Typography variant="body2">
        {props.roller} rolled {roll.number}d{roll.sides}{roll.modifier>=0?'+':''}{roll.modifier}
      </Typography>
      <Typography variant="body2">rolled: {roll.result}</Typography>
      {roll.type==='check' && <Typography>{roll.success?'Success!': 'Fail!'}</Typography>}
    </Container>
  )
}