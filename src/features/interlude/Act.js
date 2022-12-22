import { Container } from "@mui/system"
import { Typography } from "@mui/material"

import { useContext } from "react"
import { ActContext } from "../../contexts/ActContext"
import { UserContext } from "../../contexts/UserContext"

import SetRoll from './SetRoll'
import PlayerRollInput from "./PlayerRollInput"
import RollResults from "./RollResults"
import Says from "./Says"

export default function Act(props) {
  const {actDoc, updateActField} = useContext(ActContext)
  const {userDoc} = useContext(UserContext)
  const ownership = 
    props.isOwned?
    'dm'
    :actDoc.creator === userDoc.username?'creator':false

  console.log('ownership', ownership)
  console.log('stage', actDoc.stages)
  



  const setRoll = (roll) =>{
    updateActField('rollInstruction', roll)
  }

  const makeRoll = (roll) =>{
    updateActField('roll', roll)
  }

  const setSays = (says, speaker) =>{
    const field = speaker==='Dm'?'dmSays':'playerSays'
    updateActField (field, says)
  }

  console.log('actDoc', actDoc)
  

  return (
    <Container maxWidth='md' sx={{
      border: 6,
      borderColor: 'secondary.dark',
      borderRadius: 1,
      mt: 2
    }}>
      <Typography variant='body2'>{actDoc.creator}: {actDoc.action}</Typography>
      {actDoc.stage==='new' && ownership ==='dm' && <SetRoll setRoll={setRoll}/>}
      {actDoc.stage==='rollAvail' && <Typography variant='body2'>{actDoc.rollInstruction.description}</Typography>}
      {actDoc.stage==='rollAvail' && ownership==='creator' && <PlayerRollInput rollInstruction={actDoc.rollInstruction} makeRoll={makeRoll}/>}
      {actDoc.stage==='rolled' && <RollResults roller={actDoc.creator} actDoc={actDoc}/>}
      {actDoc.stage==='rolled' && ownership==='dm' && actDoc.dmSays==='' && <Says setSays={setSays} speaker='Dm' actDoc={actDoc} input={actDoc.dmSays===''}/> }
      {actDoc.dmSays !== '' && <Says speaker='Dm' actDoc={actDoc} input={actDoc.dmSays===''}/> }
      {actDoc.stage==='rolled' && ownership==='creator' && actDoc.playerSays==='' && <Says setSays={setSays} speaker={actDoc.creator} actDoc={actDoc} input={actDoc.playerSays===''}/> }
      {actDoc.playerSays !== '' && <Says  speaker={actDoc.creator} actDoc={actDoc} input={actDoc.playerSays===''}/> }
      
    </Container>
  )
}
//<Typography variant='h6'>{actDoc.creator}</Typography>
