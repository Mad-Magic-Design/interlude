import { Container } from "@mui/system"
import { Typography } from "@mui/material"

import { useContext } from "react"
import { ActContext } from "../../contexts/ActContext"
import { UserContext } from "../../contexts/UserContext"

import SetRoll from './SetRoll'

export default function Act(props) {
  const {actDoc} = useContext(ActContext)
  const {userDoc} = useContext(UserContext)
  const ownership = 
    props.isOwned?
    'dm'
    :actDoc.creator === UserContext.username?'creator':false

  console.log('ownership', ownership)
  console.log('stage', actDoc.stages)
  

  const setRoll = () =>{

  }
  

  return (
    <Container>
      <Typography variant='body2'>{actDoc.creator}: {actDoc.action}</Typography>
      {actDoc.stages==='new' && ownership ==='dm' && <SetRoll setRoll={setRoll}/>}
    </Container>
  )
}
//<Typography variant='h6'>{actDoc.creator}</Typography>
