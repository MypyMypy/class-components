export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  country?: string;
  age?: number;
  email?: string;
}

export interface UserDataResponce {
  users: UserData[];
  limit: number;
  skip: number;
  total: number;
}

export interface GetUsersPayloadI {
  q?: string;
  limit?: number;
  skip?: number;
  page?: number;
}
