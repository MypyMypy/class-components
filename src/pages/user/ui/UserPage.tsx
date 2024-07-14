import { useAppContext } from '@/app/providers/appContext';
import { useGetUserRequest } from '@/shared/api';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const UserPage: React.FC = () => {
  const params = useParams();
  const { state } = useAppContext();
  const { user } = state;
  const { getUser } = useGetUserRequest();

  useEffect(() => {
    const userId = params['id'];
    userId && getUser(Number(userId));
  }, [params]);

  return user.status === 'loading' ? (
    'Loading...'
  ) : (
    <div>
      <img src={user.image || undefined} />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>{user.age} years</p>
    </div>
  );
};
