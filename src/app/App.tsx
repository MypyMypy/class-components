import React from 'react';
import './App.css';
import { Home } from '@/pages/home';
import { ErrorBoundary } from './providers';
import { AppContextProvider } from './providers/appContext/appContextProvider';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <Home />
      </AppContextProvider>
    </ErrorBoundary>
  );
};

export default App;
