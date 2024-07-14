import type { AxiosResponse } from 'axios';
import { axiosInstance } from '../axios';
import { GetUsersPayloadI, UserDataResponce } from './users.types';

export default {
  getUsers(payload: GetUsersPayloadI): Promise<AxiosResponse<UserDataResponce>> {
    return axiosInstance.get('/users/search', { params: payload });
  },
  getUser(id: number): Promise<AxiosResponse> {
    return axiosInstance.get(`/users/${id}`);
  },
};
