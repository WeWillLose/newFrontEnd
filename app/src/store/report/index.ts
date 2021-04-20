import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, {ReportStateInterface} from './state';
import comment from './report_tables/1/comment'
import progress_exam from './report_tables/1/progress_exam'
import meta from './meta'
import mutations from './mutations'
import getters from 'src/store/report/getters';

const exampleModule: Module<ReportStateInterface, StateInterface> = {
  namespaced: true,
  state,
  getters,
  mutations,
  modules: {comment,meta,progress_exam}
};

export default exampleModule;
