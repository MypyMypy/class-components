import { UserActions, UserActionsT, UserReducerI } from './userReducer.types';

export const userReducer = (state: UserReducerI, action: UserActionsT): UserReducerI => {
  switch (action.type) {
    case UserActions.load:
      return {
        ...state,
        ...action.payload,
      };
    case UserActions.changeLoadStatus:
      return {
        ...state,
        status: action.payload.status,
      };
  }
};
