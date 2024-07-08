import { UserData } from '@/shared/api/users/users.types';
import React from 'react';

export class UserCard extends React.Component<UserData> {
  render(): React.ReactNode {
    const { firstName, lastName, country, age, email } = this.props;

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
  }
}
