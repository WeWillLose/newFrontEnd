import { GetterTree } from 'vuex';
import {ReportStateInterface} from './state';
import {StateInterface} from '../index';

const getters: GetterTree<ReportStateInterface, StateInterface> = {
  getData: state =>{
    const res:Record<string, unknown> = {}
    res['meta'] = {}
    const dict:Record<string, unknown> = {}
    for (const t in state) {
      try{
        if(t == 'meta'){
          res['meta']['firstName'] = state[t]?.firstName
          res['meta']['lastName'] = state[t]?.lastName
          res['meta']['year1'] = state[t]?.year1
          res['meta']['year2'] = state[t]?.year2
          res['meta']['quarter'] = state[t]?.quarter
          res['meta']['middleName'] = state[t]?.middleName
        }
        else dict[t] = state[t].rows as Record<string, unknown>[]
      }catch (e) {
        console.error(e)
      }
    }
    res['tables'] = dict
    return res
  },
};

export default getters;
