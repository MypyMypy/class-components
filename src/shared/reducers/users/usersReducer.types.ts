import { UserData } from '@/shared/api/users/users.types';
import { ActionMap } from '@/shared/types/@utility';

type LoadingStatus = 'fullfield' | 'loading' | 'rejected';

export enum UsersActions {
  load = 'LOAD_USERS',
  changeLoadStatus = 'CHANGE_LOAD_STATUS',
}

interface UsersPayload {
  [UsersActions.load]: {
    users: UserData[];
    skip?: number;
    limit?: number;
    total?: number;
  };
  [UsersActions.changeLoadStatus]: {
    status: LoadingStatus;
  };
}

export type UsersActionsT = ActionMap<UsersPayload>[keyof ActionMap<UsersPayload>];

export interface UsersReducerI {
  users: UserData[];
  skip: number;
  limit: number;
  total: number;
  status: LoadingStatus;
}
