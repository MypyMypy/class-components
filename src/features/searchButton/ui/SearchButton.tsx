import React from 'react';
import { SearchButtonProps } from './SearchButton.props';
import { useGetUsersRequest } from '@/shared/api';

export const SearchButton: React.FC<SearchButtonProps> = ({ qUser }) => {
  const { getUsers } = useGetUsersRequest();

  const handlerClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    getUsers({ q: qUser });
  };

  return <button onClick={(e) => handlerClick(e)}>Search</button>;
};
