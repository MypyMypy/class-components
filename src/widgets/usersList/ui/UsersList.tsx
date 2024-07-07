import React from 'react';
import { UserCard } from '@/entities/userCard';
import { UserData } from '@/shared/api/users/users.types';

export class UsersList extends React.Component<{ usersData: UserData[] | null }> {
  render(): React.ReactNode {
    return (
      <ul>
        {this.props.usersData &&
          this.props.usersData.map((userData, index) => (
            <li key={index}>
              <UserCard {...userData} />
            </li>
          ))}
      </ul>
    );
  }
}
