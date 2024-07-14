import React, { useState } from 'react';
import { SearchInput } from '@/features/searchInput';
import { SearchButton } from '@/features/searchButton';
import { useGetUsersRequest } from '@/shared/api';

export const FilterBar: React.FC = () => {
  const [searchRow, setSearchRow] = useState<string>('');
  const { getUsers } = useGetUsersRequest();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getUsers({ q: searchRow });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput setSearchRow={setSearchRow} />
      <SearchButton qUser={searchRow} />
    </form>
  );
};
