import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AdminStateInterface } from './state';
import {ERole} from 'src/types/user/ERole';

const getters: GetterTree<AdminStateInterface, StateInterface> = {
  getUsers(state){
    return state.users
  },
  getRoles(state){
    return [{'name':ERole.TEACHER},{'name':ERole.CHAIRMAN}]
  },
  geEditedUser(state){
    return state.editedUser
  },
  getColumns(state){
    return state.columns
  }
};

export default getters;
