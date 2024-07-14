import React, { ReactNode } from 'react';

export class ErrorBoundary extends React.Component<{ children: ReactNode }> {
  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  componentDidCatch(error: Error, errorMessage: React.ErrorInfo): void {
    console.log('[ErrorBoundary]', error, errorMessage);
  }

  render(): React.ReactNode {
    if (this.state.isError)
      return (
        <div>
          <p>Code: Red - Found ERROR</p>
          <button onClick={() => this.setState((prevState) => ({ ...prevState, isError: false }))}>Reset Error</button>
        </div>
      );

    return this.props.children;
  }
}
