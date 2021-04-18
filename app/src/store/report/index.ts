import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, {ReportStateInterface} from './state';
import comment from './report_tables/tables/1'
import meta from './meta'
import getters from 'src/store/report/getters';
const exampleModule: Module<ReportStateInterface, StateInterface> = {
  namespaced: true,
  state,
  getters,
  modules: {comment,meta}
};

export default exampleModule;
