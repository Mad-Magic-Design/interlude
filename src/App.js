import { useState} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useAuth} from './hooks/useAuth';
import { AuthContext } from './contexts/AuthContext';
import {UserProvider} from './contexts/UserContext'
import {ThemeProvider} from '@mui/material';
import { darkThemeOptions, lightThemeOptions } from './libraries/mui/theme';
import {CssBaseline} from '@mui/material';

import Landing from './pages/Landing';
import Home from './pages/Home'
import Interlude from './features/interlude/Interlude'
import TopBar from './features/navigation/TopBar';

function App() {

  const { token, login, logout} = useAuth();
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <AuthContext.Provider value={{
      isLoggedIn: !!token,
      token,
      login,
      logout,
    }}>
    <UserProvider>
    <ThemeProvider theme={isDarkTheme?darkThemeOptions:lightThemeOptions}>
    <CssBaseline enableColorScheme />
    <TopBar toggleTheme={()=>setIsDarkTheme(prev => (!prev))}/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/interlude/:iid' element={<Interlude/>}/>
      </Routes>
      </ThemeProvider>
      </UserProvider>
    </AuthContext.Provider>
  );
}

export default App;
