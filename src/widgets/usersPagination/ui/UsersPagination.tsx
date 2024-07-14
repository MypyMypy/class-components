import { useAppContext } from '@/app/providers/appContext/';
import { UsersPaginationButton } from '@/features/userPaginationButton';
import React, { useCallback, useEffect, useState } from 'react';

export const UsersPagination: React.FC = () => {
  const { state } = useAppContext();
  const { total, limit } = state.users;
  const [countPages, setCountPages] = useState(1);

  useEffect(() => {
    total && limit && setCountPages(Math.floor(total / limit));
  }, [total, limit]);

  const renderButton = useCallback(() => {
    const buttons = [];
    for (let i = 1; i <= countPages; i++) {
      buttons.push(<UsersPaginationButton pageNumber={i} key={i} />);
    }
    return buttons;
  }, [countPages]);

  return <div>{renderButton()}</div>;
};
