import { AppBar, Box, Toolbar, IconButton, Button, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import {UserContext} from '../../contexts/UserContext'
import {AuthContext} from '../../contexts/AuthContext'

export default function TopBar() {
  const {userDoc} = useContext(UserContext)
  const {isLoggedIn} = useContext(AuthContext)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {userDoc.username!==''?userDoc.username:'Interlude'}
          </Typography>
          <Button color="inherit">{isLoggedIn?'Sign Out':'Sign In'}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
