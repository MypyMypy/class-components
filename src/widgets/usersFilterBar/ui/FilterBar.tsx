import React from 'react';
import { UserData } from '@/shared/api/users/users.types';
import { SearchInput } from '@/features/searchInput';
import { SearchButton } from '@/features/searchButton';

export class FilterBar extends React.Component<
  { setUsers: (isLoading: boolean, users: UserData[]) => void },
  { searchRow: string; isError: boolean }
> {
  state = {
    searchRow: '',
    isError: false,
  };

  setSearchRow = (value: string) => {
    this.setState((prevState) => ({ ...prevState, searchRow: value }));
  };

  handlerButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    this.setState((prevState) => ({ ...prevState, isError: true }));
  };

  render(): React.ReactNode {
    if (this.state.isError) {
      throw new Error('Yo Ho Ho!');
    }

    return (
      <form>
        <button onClick={this.handlerButton}>Throw Error</button>
        <SearchInput setSearchRow={this.setSearchRow} />
        <SearchButton searchRow={this.state.searchRow} setUsers={this.props.setUsers} />
      </form>
    );
  }
}
