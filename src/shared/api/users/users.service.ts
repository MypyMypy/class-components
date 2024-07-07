import type { AxiosResponse } from 'axios';
import { axiosInstance } from '../axios';
import { UserDataResponce } from './users.types';

export default {
  fetchUsers(): Promise<AxiosResponse> {
    return axiosInstance.get('/users?limit=20');
  },
  fetchSearchUsers(str: string): Promise<AxiosResponse<UserDataResponce>> {
    return axiosInstance.get(`/users/search?q=${str}`);
  },
};
