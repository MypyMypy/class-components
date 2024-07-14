import React from 'react';
import { UsersList } from '@/widgets/usersList';
import { FilterBar } from '@/widgets/usersFilterBar';
import { UsersPagination } from '@/widgets/usersPagination';

export const Home: React.FC = () => {
  return (
    <>
      <header>
        <div className='container'>
          <FilterBar />
        </div>
      </header>
      <main>
        <section>
          <div className='container'>
            <h1>Users</h1>
            <UsersList Pagination={UsersPagination} />
          </div>
        </section>
      </main>
    </>
  );
};
