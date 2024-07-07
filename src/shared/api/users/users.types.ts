export interface UserData {
  firstName: string;
  lastName: string;
  country?: string;
  age?: number;
  email?: string;
}

export interface UserDataResponce {
  users: UserData[];
}
