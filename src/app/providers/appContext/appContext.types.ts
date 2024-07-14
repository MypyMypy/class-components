import { UserReducerI } from '@/shared/reducers/user/userReducer.types';
import { UsersActionsT } from '@/shared/reducers/users';
import { UsersReducerI } from '@/shared/reducers/users/usersReducer.types';
import { Dispatch } from 'react';

export interface AppContextI {
  users: UsersReducerI;
  user: UserReducerI;
}

export type AppDispatchT = Dispatch<UsersActionsT>;
