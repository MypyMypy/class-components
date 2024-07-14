import React, { useEffect, useState } from 'react';
import { UserCard } from '@/entities/userCard';
import styles from './styles.module.css';
import { useGetUsersRequest } from '@/shared/api';
import { queryParamsToObject, useObjectSearchParams } from '@/shared/hooks/useObjectSearchParams';
import { useAppContext } from '@/app/providers/appContext/appContext';

interface UsersListProps {
  Pagination?: React.FC;
}

export const UsersList: React.FC<UsersListProps> = ({ Pagination }) => {
  const [isError, setIsError] = useState<boolean>(false);

  const { state } = useAppContext();
  const { users, status } = state.users;
  const { getUsers } = useGetUsersRequest();
  const { queryParams } = useObjectSearchParams();

  useEffect(() => {
    const queryObject = queryParamsToObject(queryParams);
    getUsers(queryObject);
  }, [queryParams]);

  useEffect(() => {
    if (isError) {
      throw new Error('Yo Ho Ho!');
    }
  }, [isError]);

  const handlerButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsError(true);
  };

  return (
    <div>
      <button onClick={handlerButton}>Throw Error</button>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <ul className={styles['users-list']}>
          {users.map((userData, index) => (
            <li key={index}>
              <UserCard {...userData} />
            </li>
          ))}
        </ul>
      )}
      {Pagination && <Pagination />}
    </div>
  );
};
