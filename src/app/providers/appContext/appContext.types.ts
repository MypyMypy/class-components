import { UserData } from '@/shared/api/users/users.types';
import { UsersActionsT } from '@/shared/reducers/users';
import { Dispatch } from 'react';

export interface AppContextI {
  users: {
    users: UserData[];
    status: 'fullfield' | 'loading' | 'rejected';
  };
}

export type AppDispatchT = Dispatch<UsersActionsT>;
