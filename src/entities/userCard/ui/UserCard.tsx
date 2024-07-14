import React from 'react';
import { UserCardProps } from './UserCard.props';

export const UserCard: React.FC<UserCardProps> = ({ firstName, lastName, country, age, email }) => {
  return (
    <article>
      <h3>
        {firstName} {lastName}
      </h3>
      {age && <p>Age: {age}</p>}
      {country && <p>Country: {country}</p>}
      {email && <p>Email: {email}</p>}
    </article>
  );
};
