import React from 'react';
import { UserCardProps } from './UserCard.props';
import { Link } from 'react-router-dom';
import { useObjectSearchParams } from '@/shared/hooks/useObjectSearchParams';

export const UserCard: React.FC<UserCardProps> = ({ id, firstName, lastName, country, age, email }) => {
  const { queryParams } = useObjectSearchParams();

  return (
    <article>
      <Link to={`/user/${id}` + '?' + queryParams}>
        <h3>
          {firstName} {lastName}
        </h3>
        {age && <p>Age: {age}</p>}
        {country && <p>Country: {country}</p>}
        {email && <p>Email: {email}</p>}
      </Link>
    </article>
  );
};
