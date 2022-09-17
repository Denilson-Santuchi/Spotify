import React, { useState, createContext } from 'react';

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider: React.FC<IContextProvider> = ({ children }) => {
  const [user, setUser] = useState('user');
  const [password, setPassword] = useState('');
  const [musics, setMusics] = useState([]);
  const [musicView, setMusicView] = useState({} as IMusicView);
  const [loading, setLoading] = useState(false);

  const contextValue = {
    user,
    setUser,
    password,
    setPassword,
    musics,
    setMusics,
    musicView,
    setMusicView,
    loading,
    setLoading
  }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = (): IAppContext => {
  const context = React.useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider')
  }
  return context
}