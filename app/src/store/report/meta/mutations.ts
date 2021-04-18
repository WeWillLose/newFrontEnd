import { MutationTree } from 'vuex';
import {defaultMetaState, MetaStateInterface} from './state';

const mutation: MutationTree<MetaStateInterface> = {
  setState(state: MetaStateInterface,metaState: MetaStateInterface){
    state = metaState
  },
  setDefaultState(state: MetaStateInterface){
     Object.assign(state,defaultMetaState)
  },
  setYear1(state: MetaStateInterface,year1: number){
    state.year1 = year1
  },
  setYear2(state: MetaStateInterface,year2: number){
    state.year2 = year2
  },
  setQuarter(state: MetaStateInterface,quarter: number){
    state.quarter = quarter
  },
  setLastName(state: MetaStateInterface,lastName: string){
    state.lastName = lastName
  },
  setFirstName(state: MetaStateInterface,firstName: string){
    state.firstName = firstName
  },
  setMiddleName(state: MetaStateInterface,middleName: string){
    state.middleName = middleName
  },

};

export default mutation;
