import {User, UserInterface, UserLoginInterface} from 'src/types/user/user';
import axios, {AxiosInstance, AxiosResponse} from 'axios';

export interface ServerResponse<T> {
  status: number
  statusText: string
  headers: string[],
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

  saveReport(data: unknown): Promise<ServerResponse<unknown>>;

  downloadReport(id: number): Promise<ServerResponse<unknown>>;

  downloadScoreList(id: number): Promise<ServerResponse<unknown>>;

}

class Api implements ApiInterface {
  login(userLogin: UserLoginInterface): Promise<ServerResponse<User>> {
    return resource.post('/auth/authenticate/', userLogin)
  };

  registrationUser(user: User): Promise<ServerResponse<User>> {
    return resource.post('/auth/registration', user)
  };

  getCurrentUser(): Promise<ServerResponse<User>> {
    return resource.get('/auth/authenticate')
  };

  saveReport(data: unknown): Promise<ServerResponse<unknown>> {
    return resource.post('/report', data)
  };

  getReportsCurrentUser(): Promise<ServerResponse<unknown>> {
    return resource.get('/report/author/current')
  }

  downloadReport(id: number): Promise<ServerResponse<unknown>> {
    return resource.get(`/report/docx/${id}`,{responseType:'arraybuffer'})
  }

  downloadScoreList(id: number): Promise<ServerResponse<unknown>> {
    return resource.get(`/scoreList/docx/${id}`,{responseType:'arraybuffer'})
  }

  async setChairman(chairmanId: number, followerId: number):Promise<ServerResponse<UserInterface>> {
    return resource.put(`/user/chairman/${chairmanId},${followerId}`)
  }

  async getUsers():Promise<ServerResponse<UserInterface>> {
    return resource.get('/user/info/public/all')
  }

  async deleteUser(id: number):Promise<ServerResponse<unknown>> {
    return resource.delete(`/user/${id}`)
  }

  async editUser(user: UserInterface):Promise<ServerResponse<UserInterface>> {
    return resource.put(`/user/info/${user.id}`,user)
  }

  async resetPassword(user: UserInterface):Promise<ServerResponse<UserInterface>>  {
    return resource.put(`/user/password/${user.id}`,{password:user.password})
  }

  async setRoles(user: UserInterface):Promise<ServerResponse<UserInterface>>  {
    return resource.put(`/user/roles/${user.id}`,user.roles.map(role =>{return {'name':role.name}}))
  }

  async  getChairmans():Promise<ServerResponse<UserInterface[]>> {
    return resource.get('/user/chairman/all')
  }
}

const api = new Api();
export default api;
