import {GetterTree} from 'vuex';
import {ReportStateInterface} from './state';
import {StateInterface} from '../index';
import userUtils from "src/utils/user/user";

const getters: GetterTree<ReportStateInterface, StateInterface> = {
  getState: state => state,

  getData: state => {
    const data: Record<string, unknown> = {}

    const computed: Record<string, unknown> = {} as Record<string, unknown>
    const tables: Record<string, unknown> = {}
    const meta = {} as Record<string, unknown>

    let sum1 = 0;
    let sum2 = 0;
    for (const t in state) {
      try {
        if (t == 'meta') {
          meta['firstName'] = state[t]?.firstName
          meta['lastName'] = state[t]?.lastName
          meta['year1'] = state[t]?.year1
          meta['year2'] = state[t]?.year2
          meta['quarter'] = state[t]?.quarter
          meta['middleName'] = state[t]?.middleName
          meta['fio'] = userUtils.getFio({
            firstName: state[t]?.firstName as string || '',
            id: 0,
            lastName: state[t]?.lastName as string || '',
            middleName:state[t]?.middleName as string || '',
            username: ''
          }),
            meta['fioShort'] = userUtils.getShortFio({
              firstName: state[t]?.firstName as string || '',
              id: 0,
              lastName: state[t]?.lastName as string || '',
              middleName:state[t]?.middleName  as string || '',
              username: ''
            })
        } else tables[t] = state[t].rows as Record<string, unknown>[]
      } catch (e) {
        console.error(e)
      }
    }
    data['tables'] = tables
    data['META'] = meta
    const res = {}
    res['data'] = data
    return res
  },
};

export default getters;
