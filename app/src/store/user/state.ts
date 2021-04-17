// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {User, UserInterface} from 'src/types/user/user';



export interface UserStateInterface {
  user: UserInterface | null
}

function state(): UserStateInterface {
  return {
    user: null
  }
}

export default state;
