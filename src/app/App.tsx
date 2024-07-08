import React from 'react';
import './App.css';
import { Home } from '@/pages/home';
import { ErrorBoundary } from './providers';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    );
  }
}

export default App;
