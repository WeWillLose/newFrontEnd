import { Module } from 'vuex';



import getters from '../getters';
import mutations from '../mutations';
import {ReportTableStateInterface} from 'src/store/report/report_tables/types';
import state from 'src/store/report/report_tables/tables/1/state';
import {StateInterface} from 'src/store';

const exampleModule: Module<ReportTableStateInterface, StateInterface> = {
  namespaced: true,
  getters,
  mutations,
  state
};

export default exampleModule;
