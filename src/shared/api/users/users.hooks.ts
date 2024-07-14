import { useAppContext } from '@/app/providers/appContext/appContext';
import { UsersActions } from '@/shared/reducers/users/usersReducer.types';
import { useLSQUser } from '@/widgets/usersFilterBar/hooks/useLSQUser';
import { UsersService } from '..';
import { GetUsersPayloadI } from './users.types';
import { DEFAULT_LIMIT } from '@/shared/libs/contants';
import { UserActions } from '@/shared/reducers/user/userReducer.types';

export const useGetUsersRequest = () => {
  const { dispatch } = useAppContext();
  const { setQUser } = useLSQUser();

  const getUsers = (methodPayload: GetUsersPayloadI) => {
    const { page, ...payload } = methodPayload;

    dispatch({
      type: UsersActions.changeLoadStatus,
      payload: { status: 'loading' },
    });
    setQUser(payload.q || '');

    UsersService.default
      .getUsers({
        ...payload,
        limit: payload.limit || DEFAULT_LIMIT,
        skip: payload.q ? 0 : page ? DEFAULT_LIMIT * (page - 1) : payload.skip,
      })
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: UsersActions.load,
          payload: data,
        });
        dispatch({
          type: UsersActions.changeLoadStatus,
          payload: { status: 'fullfield' },
        });
      });
  };

  return { getUsers };
};

export const useGetUserRequest = () => {
  const { dispatch } = useAppContext();
  const getUser = (id: number) => {
    dispatch({
      type: UserActions.changeLoadStatus,
      payload: { status: 'loading' },
    });

    UsersService.default
      .getUser(id)
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: UserActions.load,
          payload: data,
        });
        dispatch({
          type: UserActions.changeLoadStatus,
          payload: { status: 'fullfield' },
        });
      });
  };

  return { getUser };
};
