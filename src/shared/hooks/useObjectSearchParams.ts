import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const queryParamsToObject = (queryParams: URLSearchParams) => {
  const newQueryObject: Record<string, string> = {};
  for (const [key, value] of queryParams.entries()) {
    newQueryObject[key] = value;
  }
  return newQueryObject;
};

export const useObjectSearchParams = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [queryObject, setQueryObject] = useState<Record<string, string>>({});

  useEffect(() => {
    const newQueryObject: Record<string, string> = queryParamsToObject(queryParams);
    setQueryObject(newQueryObject);
  }, [queryParams]);

  return { queryObject, queryParams, setQueryParams };
};
