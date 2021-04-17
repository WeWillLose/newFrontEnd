import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { HeaderStateInterface } from './state';

const actions: ActionTree<HeaderStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
