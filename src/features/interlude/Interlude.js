import { useContext } from "react"
import { InterludeContext } from "../../contexts/InterludeContext"
import { UserContext } from "../../contexts/UserContext"

import NewAct from "./NewAct"

import { Box } from "@mui/system"
import { Container, Typography } from "@mui/material"



export default function Interlude() {
    const {interludeDoc} = useContext(InterludeContext)
    const {userDoc} = useContext(UserContext)
    const isOwned = userDoc.createdInterludes.map(inter=>inter.id).includes(interludeDoc._id)

  return (
    <>
      <Container>
        <Typography variant="h4">{interludeDoc.title}</Typography>
        <Typography variant="body1">{interludeDoc.description}</Typography>
        <Typography variant="body1">{interludeDoc.prompt}</Typography>
      </Container>
      {!isOwned && <NewAct/>}
      <div>{interludeDoc.title}</div>
    
    </>
  )
}
