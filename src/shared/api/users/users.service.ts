import type { AxiosResponse } from 'axios';
import { axiosInstance } from '../axios';
import { UserDataResponce } from './users.types';

export default {
  fetchUsers(str: string): Promise<AxiosResponse<UserDataResponce>> {
    return axiosInstance.get(`/users/search?q=${str}&limit=20`);
  },
};
