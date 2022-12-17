import { Typography, Button } from "@mui/material"
import { Box, Container} from "@mui/system"

import { useState } from "react"
import Signin from "../features/auth/Signin"
import Signup from "../features/auth/Signup"



export default function Landing() {
  const [signInSelected, setSignInSelected] = useState(true)
  
  return (
    <Box sx={{
      //backgroundColor: 'background.paper',
    }}>
      <Container>
        <Typography variant='h1' align="center">Interludes</Typography>
        <Typography variant='subtitle1' align='center'>play out downtime between rpg sessions</Typography>
      </Container>
      <Container component="main" maxWidth="xs" sx={{
      backgroundColor: 'background.paper',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
    }}>
        <Container sx={{
      //backgroundColor: 'secondary.light',
      display: 'flex',
      justifyContent: 'center'
    }}>
          <Button fullWidth onClick={()=>setSignInSelected(true)}
          sx={signInSelected?
            {
              backgroundColor:'background.paper'
            }
          :{
            backgroundColor: 'background.default',
            color: 'text.disabled'
          }
          }
           
          >Sign In</Button>
          <Button fullWidth onClick={()=>setSignInSelected(false)}
            sx={signInSelected?
              {
                backgroundColor:'background.default',
                color: 'text.disabled'
              }
            :{
              backgroundColor: 'background.paper',
              
            }
            }
        >
            Sign Up</Button>
        </Container>
      {signInSelected?
      <Signin/>
      :<Signup/>
      }
      </Container>
    </Box>
  )
}
