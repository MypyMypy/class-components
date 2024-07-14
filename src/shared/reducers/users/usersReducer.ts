import { UsersActions, UsersActionsT, UsersReducerI } from './usersReducer.types';

export const usersReducer = (state: UsersReducerI, action: UsersActionsT): UsersReducerI => {
  switch (action.type) {
    case UsersActions.load:
      return {
        ...state,
        users: action.payload.users,
        limit: action.payload.limit || state.limit,
        skip: action.payload.skip || state.skip,
        total: action.payload.total || state.total,
      };
    case UsersActions.changeLoadStatus:
      return {
        ...state,
        status: action.payload.status,
      };
  }
};
