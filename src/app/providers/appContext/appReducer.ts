import { UsersActionsT, usersReducer } from '@/shared/reducers/users';
import { UserActionsT } from '@/shared/reducers/user';
import { AppContextI } from './appContext.types';
import { userReducer } from '@/shared/reducers/user';

export const appReducer = ({ users, user }: AppContextI, action: UsersActionsT | UserActionsT) => ({
  users: usersReducer(users, action as UsersActionsT),
  user: userReducer(user, action as UserActionsT),
});
