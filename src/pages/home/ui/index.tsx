import React from 'react';
import { UsersService } from '@/shared/api';
import { UserData } from '@/shared/api/users/users.types';
import { UsersList } from '@/widgets/usersList';
import { FilterBar } from '@/widgets/usersFilterBar';

export class Home extends React.Component<object, { isLoading: boolean; users: UserData[] | null }> {
  state = {
    isLoading: false,
    users: null,
  };

  componentDidMount(): void {
    this.setState((prevState) => ({ ...prevState, isLoading: true }));

    UsersService.default
      .fetchUsers()
      .then((res) => res.data)
      .then((data) => this.setState({ isLoading: false, users: data.users }));
  }

  setUsers = (isLoading: boolean, users: UserData[]) => {
    this.setState((prevState) => ({ ...prevState, isLoading: isLoading, users: users }));
  };

  render(): React.ReactNode {
    return (
      <>
        <header>
          <div className='container'>
            <FilterBar setUsers={this.setUsers} />
          </div>
        </header>
        <main>
          <section>
            <div className='container'>
              <h1>Users</h1>
              {this.state.isLoading ? 'Loading...' : <UsersList usersData={this.state.users} />}
            </div>
          </section>
        </main>
      </>
    );
  }
}
