import { useContext } from "react"
import { InterludeContext } from "../../contexts/InterludeContext"


export default function Interlude() {
    const {interludeDoc} = useContext(InterludeContext)
   

  return (
    <>
   
    <div>{interludeDoc.title}</div>
    
    </>
  )
}
