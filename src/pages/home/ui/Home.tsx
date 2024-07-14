import React from 'react';
import { UsersList } from '@/widgets/usersList';
import { FilterBar } from '@/widgets/usersFilterBar';
import { useAppContext } from '@/app/providers/appContext/appContext';

export const Home: React.FC = () => {
  const { state } = useAppContext();

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
            {state.users.status === 'loading' ? 'Loading...' : <UsersList usersData={state.users.users} />}
          </div>
        </section>
      </main>
    </>
  );
};
