import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { Routes, Route } from "react-router-dom"

import { Box, Container } from "@mui/system"

import InterludeMenu from "../features/interlude/InterludeMenu"
import NewInterlude from "../features/interlude/NewInterlude"
import JoinInterlude from "../features/interlude/JoinInterlude"
import InterludeWrapper from '../features/interlude/InterludeWrapper'

export default function Home() {
     
  return (
    <Box sx={{p:3}}>
      <Container sx={{p:3}}>
          <Routes>
              <Route path='/' element={<InterludeMenu/>}/>
              <Route path='/new' element={<NewInterlude/>}/>
              <Route path='/join' element={<JoinInterlude/>}/>
              <Route path='/interlude/:iid' element={<InterludeWrapper/>}/>

          </Routes>
      </Container>
    </Box>
  )
}
