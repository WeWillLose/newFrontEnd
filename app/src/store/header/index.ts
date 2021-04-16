import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { HeaderInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const exampleModule: Module<HeaderInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default exampleModule;
