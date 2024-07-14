import { createContext, Dispatch, useContext } from 'react';
import { AppContextI } from './appContext.types';
import { UsersActionsT } from '@/shared/reducers/users';
import { UserActionsT } from '@/shared/reducers/user';

export const initialValues: AppContextI = {
  users: {
    users: [],
    skip: 0,
    total: 0,
    limit: 30,
    status: 'fullfield',
  },
  user: {
    age: null,
    image: null,
    firstName: null,
    lastName: null,
    status: 'fullfield',
  },
} as const;

export const AppContext = createContext<{
  state: AppContextI;
  dispatch: Dispatch<UsersActionsT | UserActionsT>;
}>({
  state: initialValues,
  dispatch: () => null,
});

export const useAppContext = () => {
  const { state, dispatch } = useContext(AppContext);
  return { state, dispatch };
};
