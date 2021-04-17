import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UserStateInterface } from './state';
import userUtils from 'src/utils/user/user';

const getters: GetterTree<UserStateInterface, StateInterface> = {
  getIsLoggedIn ( context ):boolean {
    if(!context.user) return false;
    return userUtils.isLoggedIn( context.user );
  },
  getIsAdmin ( context ):boolean {
    if(!context.user) return false;
    return userUtils.isAdmin(context.user);
  },
  getIsChairman ( context ):boolean {
    if(!context.user) return false;
    return userUtils.isChairman(context.user);
  },
  getUsername(context):string{
    return context.user?.username || '';
  },
  getShortFio(context):string{
    return userUtils.getShortFio(context.user);
  }

};

export default getters;
