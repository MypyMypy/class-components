import React from 'react';
import './App.css';
import { ErrorBoundary } from './providers';
import { AppContextProvider } from './providers/appContext/appContextProvider';
import { AppRouter } from './providers/router';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </ErrorBoundary>
  );
};

export default App;
