import {MutationTree} from 'vuex';
import {ReportStateInterface} from 'src/store/report/state';
import {defaultMetaState} from "src/store/report/meta/state";
import _ from 'lodash'

const mutation: MutationTree<ReportStateInterface> = {
  setState: (state: ReportStateInterface,data:ReportStateInterface) => {
    state = data
  },
  setTablesData: (state:ReportStateInterface, data:Record<string,unknown>) => {
    if(!data){
      return;
    }
    if(data.id !=null){
      state.meta.id = data.id;
    }
    if(data.reportName !=null){
      state.meta.reportName = data.reportName;
    }
    const tablesData = data.data
    for (const metaKey in state.meta) {
      try {
        if (tablesData['META'][metaKey] != null) {
          if(metaKey == 'year1'){
            state.meta.year1 = tablesData['META'][metaKey];
          }else if(metaKey == 'year2'){
            state.meta.year2 = tablesData['META'][metaKey];
          }else if(metaKey == 'quarter'){
            state.meta.quarter = tablesData['META'][metaKey];
          }else if(metaKey == 'firstName'){
            state.meta.firstName = tablesData['META'][metaKey];
          }else if(metaKey == 'lastName'){
            state.meta.lastName = tablesData['META'][metaKey];
          }else if(metaKey == 'middleName'){
            state.meta.middleName = tablesData['META'][metaKey];
          }
        }
      } catch (e) {
        console.error(e)
      }
    }
    for (const stateKey in state) {
      try {
        if ( tablesData['tables'][stateKey] != null ) {
          if(stateKey in state){
            state[`${stateKey}`].rows = tablesData['tables'][stateKey]
          }
        }
        // else {
        //   state[`${stateKey}`].rows = []
        // }
      } catch (e) {
        console.error(e)
      }
    }
  },
  saveCurrentState: (state: ReportStateInterface) => {
    console.log('saved')
    state = state
  },
  setDefault:(state: ReportStateInterface)=>{
      state.meta = _.cloneDeep(defaultMetaState)
    console.log(state.meta)
    for (const stateKey in state) {
      try {
            state[`${stateKey}`].rows = state[`${stateKey}`].defaultRows

        }
        // else {
        //   state[`${stateKey}`].rows = []
        // }
      catch (e) {
        console.error(e)
      }
    }
  }
}
export default mutation;
