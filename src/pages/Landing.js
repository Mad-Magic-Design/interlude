import { Typography, Button, IconButton } from "@mui/material"
import { Box, Container} from "@mui/system"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { useState, useContext } from "react"
import { ThemeSettingsContext } from "../contexts/ThemeSettingsContext"
import Signin from "../features/auth/Signin"
import Signup from "../features/auth/Signup"
import {ReactComponent as OneLine} from '../imgs/oneline.svg'
import './Landing.css'



export default function Landing() {
  const [signInSelected, setSignInSelected] = useState(true)
  const {toggleTheme, isDarkTheme} = useContext(ThemeSettingsContext)
  return (
    <Box component="article">  
      <Container 
      component='header'
        sx={{
          mt:4,
          pb:2,
          borderRadius: 2,  
        }}
      >
        <Container component='figure' disableGutters sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
        }} >
        <IconButton 
            onClick={toggleTheme}
            color="inherit">
              {isDarkTheme?<Brightness4Icon/>:<Brightness7Icon/>}
            </IconButton>
            </Container>
        <Typography variant='h1' align="center" sx={isDarkTheme?{}:{color:'primary.main'}}>Interludes</Typography>
        <Typography variant='subtitle1' align='center'>play out downtime between rpg sessions</Typography>
        <Box>
          <OneLine id='oneline'  stroke={isDarkTheme?'#E8E4EE':'black'}/>
        </Box>
        
      </Container>
      <Container disableGutters component="main"  maxWidth="xs" 
      sx={{
      mt:4,
      backgroundColor: 'background.paper',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 2,
      boxShadow: "2px 2px 2px #1f0f36, -2px -2px 2px #29154a;"
    }}>
        <Container disableGutters sx={{
      //backgroundColor: 'secondary.light',
      display: 'flex',
      justifyContent: 'center'
    }}>
          <Button fullWidth onClick={()=>setSignInSelected(true)}
          aria-label="navigate to sign in"
          sx={signInSelected?
            {
              backgroundColor:'background.paper',
              color: 'text.primary',
              boxShadow: "-2px -2px 2px #29154a;"
            }
          :{
            borderTopRightRadius: 0,
            backgroundColor: 'background.default',
            boxShadow: "-2px -3px 3px #211F24"
          }
          }
           
          >Sign In</Button>
          <Button fullWidth onClick={()=>setSignInSelected(false)}
          aria-label='navigate to sign p'
            sx={signInSelected?
              {
                borderTopLeftRadius: 0,
              backgroundColor: 'background.default',
              boxShadow: "-2px -3px 3px #211F24"
              }
            :{
              backgroundColor: 'background.paper',
              color: 'text.primary'
            }
            }
        >
            Sign Up</Button>
        </Container>
        <Container>
      {signInSelected?
      <Signin/>
      :<Signup/>
      }
    </Container>
      </Container>
    </Box>
  )
}
