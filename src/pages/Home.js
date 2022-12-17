import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

import { Box, Container } from "@mui/system"

import InterludeMenu from "../features/interlude/InterludeMenu"

export default function Home() {
    const {userDoc} = useContext(UserContext)
  return (
    <Box sx={{p:3}}>
      <Container sx={{p:3}}>
        <InterludeMenu/>
      </Container>
    </Box>
  )
}
