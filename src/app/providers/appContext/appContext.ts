import { createContext, Dispatch, useContext } from 'react';
import { AppContextI } from './appContext.types';
import { UsersActionsT } from '@/shared/reducers/users';

export const initialValues: AppContextI = {
  users: {
    users: [],
    status: 'fullfield',
  },
} as const;

export const AppContext = createContext<{
  state: AppContextI;
  dispatch: Dispatch<UsersActionsT>;
}>({
  state: initialValues,
  dispatch: () => null,
});

export const useAppContext = () => {
  const { state, dispatch } = useContext(AppContext);
  return { state, dispatch };
};
