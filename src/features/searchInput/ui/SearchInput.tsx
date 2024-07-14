import { useLSQUser } from '@/widgets/usersFilterBar/hooks/useLSQUser';
import React, { useState } from 'react';

interface SearchInputProps {
  setSearchRow: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ setSearchRow }) => {
  const { qUser } = useLSQUser();
  const [value, setValue] = useState<string>('');

  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchRow(value);
    setValue(value);
  };

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (qUser) {
      setValue(qUser);
      setSearchRow(qUser);
    }
  };

  return (
    <div>
      <input
        placeholder='enter search'
        onChange={(e) => {
          onChangeHanlder(e);
        }}
        value={value}
      />
      {qUser && (
        <div>
          <button onClick={() => onClickHandler}>{qUser}</button>
        </div>
      )}
    </div>
  );
};
