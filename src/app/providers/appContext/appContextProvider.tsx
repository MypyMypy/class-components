import React, { useReducer } from 'react';
import { appReducer } from './appReducer';
import { AppContext, initialValues } from './appContext';

export const AppContextProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialValues);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
