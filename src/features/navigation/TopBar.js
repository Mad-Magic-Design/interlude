import { AppBar, Box, Toolbar, IconButton, Button, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import {UserContext} from '../../contexts/UserContext'
import {AuthContext} from '../../contexts/AuthContext'
import { ThemeSettingsContext } from "../../contexts/ThemeSettingsContext";
import { useNavigate } from "react-router-dom";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ListIcon from '@mui/icons-material/List';

export default function TopBar(props) {
  const {userDoc} = useContext(UserContext)
  const {isLoggedIn} = useContext(AuthContext)
  const {isDarkTheme, toggleTheme, setTrashMode, page, interludeId} = useContext(ThemeSettingsContext)
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {userDoc.username!==''?userDoc.username:'Interlude'}
          </Typography>
          
          {page==='home' &&
          <IconButton
          onClick={()=>setTrashMode(prev=>(!prev))}
          color="inherit">
            <DeleteIcon/>
          </IconButton>}

          {page==='interlude' &&
          <>
          <IconButton
          onClick={()=>navigate(`/home/interlude/joincode/${interludeId}`)}
          color="inherit">
            <PersonAddAlt1Icon/>
          </IconButton>

          <IconButton
          onClick={()=>navigate('/home/')}
          color="inherit">
            <ListIcon/>
          </IconButton>
          </>
          }


          <IconButton 
          onClick={toggleTheme}
          color="inherit">
            {isDarkTheme?<Brightness4Icon/>:<Brightness7Icon/>}
          </IconButton>
          
          <Button color="inherit">{isLoggedIn?'Sign Out':'Sign In'}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

/*
<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
*/
