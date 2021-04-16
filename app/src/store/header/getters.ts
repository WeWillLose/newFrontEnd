import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { HeaderInterface } from './state';

const getters: GetterTree<HeaderInterface, StateInterface> = {
  getIsLeftDrawerOpen ( context ) {
    return context.isLeftDrawerOpen;
  },
};

export default getters;
