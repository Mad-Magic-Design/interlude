import { useParams } from "react-router-dom"
import Interlude from './Interlude'
import {InterludeProvider} from '../../contexts/InterludeContext'
import { useEffect, useState } from "react"
import { getInterlude } from "../../network/interlude"

export default function InterludeWrapper() {
  const {iid} = useParams()
  const [interludeDoc, setInterludeDoc] = useState()
  
  useEffect(()=>{
    async function load () {
       getInterlude(iid)
      .then((res)=>setInterludeDoc(res.data.interlude))
    }
    if (!interludeDoc) load()
    console.log('use effect load interlude')
  }, [])


  return (
    <>
      {interludeDoc?
      <InterludeProvider data={interludeDoc}><Interlude/></InterludeProvider>
      :  
      <div>LOADING</div>
      }
    </>
  )
}
