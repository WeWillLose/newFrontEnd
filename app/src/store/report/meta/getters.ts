import { GetterTree } from 'vuex';

import { MetaStateInterface } from './state';
import {StateInterface} from 'src/store';
import userUtils from 'src/utils/user/user';

const getters: GetterTree<MetaStateInterface, StateInterface> = {
  getState(state: MetaStateInterface){
    return state;
  },
  getData: state =>{
    const dict:Record<string, unknown> = {}
    dict['firstName'] =state.firstName;
    dict['lastName'] =state.lastName;
    dict['middleName'] =state.middleName;
    dict['year1'] =state.year1;
    dict['year2'] =state.year2;
    dict['quarter'] =state.quarter;
    dict['fioShort'] = userUtils.getShortFio({'id':0,'roles': [], 'username': null,'lastName':state.lastName,'firstName':state.firstName,'middleName':state.middleName});
    dict['fio'] = userUtils.getFio({'id':0,'roles': [], 'username': null,'lastName':state.lastName,'firstName':state.firstName,'middleName':state.middleName});
    return dict
  },
  getFirstName: state => state.firstName,
};

export default getters;
