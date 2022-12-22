import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { Routes, Route } from "react-router-dom"

import { Box, Container } from "@mui/system"

import InterludeMenu from "../features/interlude/InterludeMenu"
import NewInterlude from "../features/interlude/NewInterlude"
import JoinInterlude from "../features/interlude/JoinInterlude"
import InterludeWrapper from '../features/interlude/InterludeWrapper'
import TopBar from "../features/navigation/TopBar"
import InviteCode from "../features/interlude/InviteCode"

export default function Home(props) {
     
  return (
    <>
    <TopBar isDarkTheme={props.isDarkTheme} toggleTheme={props.toggleTheme}/>
    <Box sx={{p:2}}>
      <Container sx={{}}>
          <Routes>
              <Route path='/' element={<InterludeMenu/>}/>
              <Route path='/new' element={<NewInterlude/>}/>
              <Route path='/join' element={<JoinInterlude/>}/>
              <Route path='/interlude/joincode/:iid' element={<InviteCode/>}/>
              <Route path='/interlude/:iid' element={<InterludeWrapper/>}/>


          </Routes>
      </Container>
    </Box>
    </>
  )
}
