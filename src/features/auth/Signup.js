import { Box,  } from "@mui/system"
import { FormControlLabel, TextField, Checkbox, Button } from "@mui/material";
import { signupUser } from "../../network/user";
import { useContext } from "react";
import {UserContext} from '../../contexts/UserContext'
import {AuthContext} from '../../contexts/AuthContext'
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const {login} = useContext(AuthContext)
  const {handleUserDoc} = useContext(UserContext)
  const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userDoc = {
          username: data.get('username'),
          id: '',
          createdInterludes: [],
          joinedInterludes: [],
          options: {},
        }
        signupUser({
          email: data.get('email'),
          password: data.get('password'),
          userDoc
        })
        .then((res) => {
          console.log('response data', res.data)
          login (res.data.token)
          handleUserDoc({
            ...userDoc, id:res.data.userId
          })
        })
        .then(navigate('/home'))

        
      };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </Box>
  )
}
