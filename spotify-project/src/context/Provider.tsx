import { AppContext } from './AppContext';
import { useState } from 'react';

// @ts-ignore
export const Provider = ({ children }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const contextValue = {
    user,
    setUser,
    password,
    setPassword
  }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}