import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { HeaderInterface } from './state';

const actions: ActionTree<HeaderInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
