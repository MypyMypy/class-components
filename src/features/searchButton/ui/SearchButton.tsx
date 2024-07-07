import { UsersService } from '@/shared/api';
import { UserData } from '@/shared/api/users/users.types';
import React from 'react';

export class SearchButton extends React.Component<{ searchRow: string; setUsers: (isLoading: boolean, users: UserData[]) => void }> {
  handlerClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    this.props.setUsers(true, []);
    localStorage.setItem('qUser', this.props.searchRow);
    UsersService.default
      .fetchSearchUsers(this.props.searchRow)
      .then((res) => res.data)
      .then((data) => this.props.setUsers(false, data.users));
  };

  render(): React.ReactNode {
    return <button onClick={(e) => this.handlerClick(e)}>Search</button>;
  }
}
