import { useParams } from "react-router-dom"
import { Container } from "@mui/system"
import { Typography } from "@mui/material"

export default function InviteCode() {
    const {iid} = useParams()
  return (
    <Container maxWidth='lg' sx={{
        backgroundColor:'primary.main',
    }}>
   <Typography variant='h4'>Code to Join Interlude:</Typography>
   <Typography sx={{
    color: 'secondary.main',
    overflowWrap:'break-word'
   }} noWrap={false} variant='h6'>{iid}</Typography>
   </Container>
   
  )
}
