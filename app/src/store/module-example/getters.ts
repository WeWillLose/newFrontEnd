import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  getIsOpen ( context ) {
    return context.isOpen;
  }
};

export default getters;
