import React from 'react';
import { SearchButtonProps } from './SearchButton.props';

export const SearchButton: React.FC<SearchButtonProps> = ({ handleSubmit }) => {
  const handlerClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleSubmit();
  };

  return <button onClick={(e) => handlerClick(e)}>Search</button>;
};
