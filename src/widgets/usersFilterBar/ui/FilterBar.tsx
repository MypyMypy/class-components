import React from 'react';
import { UserData } from '@/shared/api/users/users.types';
import { SearchInput } from '@/features/searchInput';
import { SearchButton } from '@/features/searchButton';

export class FilterBar extends React.Component<{ setUsers: (isLoading: boolean, users: UserData[]) => void }, { searchRow: string }> {
  state = {
    searchRow: '',
  };

  setSearchRow = (value: string) => {
    this.setState((prevState) => ({ ...prevState, searchRow: value }));
  };

  render(): React.ReactNode {
    return (
      <form>
        <SearchInput setSearchRow={this.setSearchRow} />
        <SearchButton searchRow={this.state.searchRow} setUsers={this.props.setUsers} />
      </form>
    );
  }
}
