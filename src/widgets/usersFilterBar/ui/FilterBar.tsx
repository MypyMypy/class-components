import React, { useEffect, useState } from 'react';
import { SearchInput } from '@/features/searchInput';
import { SearchButton } from '@/features/searchButton';
import { useLSQUser } from '../hooks/useLSQUser';
import { useAppContext } from '@/app/providers/appContext/appContext';
import { UsersActions } from '@/shared/reducers/users/usersReducer.types';
import { UsersService } from '@/shared/api';

export const FilterBar: React.FC = () => {
  const { dispatch } = useAppContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleMakeRequest();
  };

  const { setQUser } = useLSQUser();

  const [searchRow, setSearchRow] = useState<string>('');

  const handleMakeRequest = () => {
    dispatch({
      type: UsersActions.changeLoadStatus,
      payload: { status: 'loading' },
    });
    setQUser(searchRow);
    UsersService.default
      .fetchUsers(searchRow)
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: UsersActions.load,
          payload: { users: data.users },
        });
        dispatch({
          type: UsersActions.changeLoadStatus,
          payload: { status: 'fullfield' },
        });
      });
  };

  useEffect(() => handleMakeRequest(), []);

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput setSearchRow={setSearchRow} />
      <SearchButton handleSubmit={handleMakeRequest} />
    </form>
  );
};
