import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';


export const useAuth = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState(false);
  
  const login = useCallback((token) => {
    setToken(token);
    localStorage.setItem(
      'interludejwt',
      JSON.stringify({
       token
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem('interludejwt');
    localStorage.removeItem('interludeUser')
    navigate('/')
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('interludejwt'));
    if (storedData ) login(storedData.userData); 
  }, [login]);

  return { token, login, logout};
};