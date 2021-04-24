import {RoleInterface, UserInterface} from 'src/types/user/user';
import {ERole} from 'src/types/user/ERole';
import _ from 'lodash';
export interface UserUtilsInterface {
  isAdmin(user: UserInterface):boolean
  isChairman(user: UserInterface):boolean
  isLoggedIn(user: UserInterface): boolean
  hasRole(user : UserInterface | null,erole:ERole):boolean
  getShortFio(user: UserInterface | null):string
  getFio(user: UserInterface | null):string
}
export class UserUtils implements UserUtilsInterface {
  hasRole(user : UserInterface | null,erole:ERole):boolean {
    if(!erole) return true;
    if(!user || !user.roles) return false;
    for(const role of user.roles){
      if(role.name == erole) return true;
    }
    return false;
  };
  isAdmin(user: UserInterface): boolean {
    if(user && user.roles){
      for(const role of user.roles){
        if(role.name == ERole.ADMIN) return true;
      }
    }
    return false;
  }

  isChairman(user: UserInterface): boolean {
    if(user && user.roles){
      for(const role of user.roles){
        if(role.name == ERole.CHAIRMAN) return true;
      }
    }
    return false;
  }

  isLoggedIn(user: UserInterface): boolean {
    if(!user) return false;
    return true;
  }
  getFio(user: UserInterface | null):string {
    if(!user) return '';
    let res = ''
    res+=_.capitalize(user.lastName ||'')+' '
    res+=_.capitalize(user.firstName ||'')+' '
    res+=_.capitalize(user.middleName ||'')
    return res;
  }
  getShortFio(user: UserInterface | null):string {
    if(!user) return '';
    let res = ''
    res+=_.capitalize(user.lastName ||'')+' '
    res+=_.capitalize(user.firstName?.substr(0,1)?.concat('. ') ||'')
    res+=_.capitalize(user.middleName?.substr(0,1)?.concat('.') ||'')
    return res;
  }
}
const userUtils  = new UserUtils();
export default userUtils;
