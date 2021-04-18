import { ActionTree } from 'vuex';

import { MetaStateInterface } from './state';
import {StateInterface} from "src/store";

const actions: ActionTree<MetaStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
