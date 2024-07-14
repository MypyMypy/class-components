import { UsersActionsT, usersReducer } from '@/shared/reducers/users';
import { AppContextI } from './appContext.types';

export const appReducer = ({ users }: AppContextI, action: UsersActionsT) => ({
  users: usersReducer(users, action),
});
