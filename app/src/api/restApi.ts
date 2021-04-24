import {User, UserLoginInterface} from 'src/types/user/user';
import axios, {AxiosInstance, AxiosResponse} from 'axios';

export interface ServerResponse<T> {
  status: number
  statusText: string
  data: T
}

const BASE_URL: string = process.env.BASE_URL || '/proxy/api/v1'

export const resource: AxiosInstance = axios.create({
  baseURL: BASE_URL
})

export interface ApiInterface {
  login(userLogin: UserLoginInterface): Promise<ServerResponse<User>>;

  registrationUser(user: User): Promise<ServerResponse<unknown>>;

  getCurrentUser(): Promise<ServerResponse<unknown>>;

  saveReport(data:unknown): Promise<ServerResponse<unknown>>;

}

class Api implements ApiInterface {
  login(userLogin: UserLoginInterface): Promise<ServerResponse<User>> {
    return resource.post('/auth/authenticate/', userLogin)
  };

  registrationUser(user: User): Promise<ServerResponse<unknown>> {
    return resource.post('/auth/registration', user)
  };

  getCurrentUser(): Promise<ServerResponse<User>> {
    return resource.get('/auth/authenticate')
  };

  saveReport(data:unknown): Promise<ServerResponse<unknown>> {
    return resource.post('/report',data)
  };
}

const api = new Api();
export default api;
