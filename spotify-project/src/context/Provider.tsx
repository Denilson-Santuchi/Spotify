import { AppContext } from './AppContext';
import { useState } from 'react';

// @ts-ignore
export const Provider = ({ children }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [musics, setMusics] = useState([]);
  const [musicView, setMusicView] = useState([]);
  const contextValue = {
    user,
    setUser,
    password,
    setPassword,
    musics,
    setMusics,
    musicView,
    setMusicView
  }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}