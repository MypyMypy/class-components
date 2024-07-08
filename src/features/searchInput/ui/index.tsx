import React from 'react';

export class SearchInput extends React.Component<{ setSearchRow: (value: string) => void }, { value: string }> {
  state = {
    value: '',
  };

  onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    this.props.setSearchRow(value);
    this.setState((prevState) => ({ ...prevState, value: value }));
  };

  render(): React.ReactNode {
    const searchRow = localStorage.getItem('qUser');

    return (
      <div>
        <input
          placeholder='enter search'
          onChange={(e) => {
            this.onChangeHanlder(e);
          }}
          value={this.state.value}
        />
        {searchRow && (
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                this.setState((prevState) => ({ ...prevState, value: searchRow }));
                this.props.setSearchRow(searchRow);
              }}
            >
              {searchRow}
            </button>
          </div>
        )}
      </div>
    );
  }
}
