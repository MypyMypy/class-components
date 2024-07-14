import React, { useEffect, useState } from 'react';
import { UserCard } from '@/entities/userCard';
import { UserData } from '@/shared/api/users/users.types';

interface UsersListProps {
  usersData: UserData[] | null;
}

export const UsersList: React.FC<UsersListProps> = ({ usersData }) => {
  const [isError, setIsError] = useState<boolean>(false);

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
      <ul>
        {usersData &&
          usersData.map((userData, index) => (
            <li key={index}>
              <UserCard {...userData} />
            </li>
          ))}
      </ul>
    </div>
  );
};
