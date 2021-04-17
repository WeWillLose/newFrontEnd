import {ActionTree} from 'vuex';
import {StateInterface} from '../index';
import {UserStateInterface} from './state';
import {UserLoginInterface} from "src/types/user/user";
import api from "src/api/restApi";

const actions: ActionTree<UserStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  },
  async login(context,user:UserLoginInterface){
    try{
      const res = await api.login(user);
      context.commit('setUser',res.data);
      return true;
    }catch (e) {
      return false;
    }
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  async logout(context){
    try{
      context.commit('setUser',null);
      return true;
    }catch (e) {
      return false;
    }
  }
};

export default actions;
