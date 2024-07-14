import { ActionMap } from '@/shared/types/@utility';

type LoadingStatus = 'fullfield' | 'loading' | 'rejected';

export enum UserActions {
  load = 'LOAD_USER',
  changeLoadStatus = 'CHANGE_LOAD_USER_STATUS',
}

interface UserPayload {
  [UserActions.load]: {
    address: string;
    age: number;
    image: string;
    firstName: string;
    lastName: string;
  };
  [UserActions.changeLoadStatus]: {
    status: LoadingStatus;
  };
}

export type UserActionsT = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export interface UserReducerI {
  age: number | null;
  image: string | null;
  firstName: string | null;
  lastName: string | null;
  status: LoadingStatus;
}
