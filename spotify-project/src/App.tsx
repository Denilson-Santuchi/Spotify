import React from 'react';
import { AppContextProvider } from './context';
import { Router } from './routes';

export const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  );
}

