import { useObjectSearchParams } from '@/shared/hooks/useObjectSearchParams';
import React from 'react';

export const UsersPaginationButton: React.FC<{ pageNumber: number }> = ({ pageNumber }) => {
  const { queryObject, setQueryParams } = useObjectSearchParams();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setQueryParams((prev) => ({
      ...prev,
      page: pageNumber,
    }));
  };
  return (
    <button onClick={handleClick} style={{ backgroundColor: queryObject['page'] === pageNumber.toString() ? 'green' : 'inherit' }}>
      {pageNumber}
    </button>
  );
};
