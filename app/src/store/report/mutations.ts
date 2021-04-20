import {MutationTree} from 'vuex';
import {ReportStateInterface} from 'src/store/report/state';


const mutation: MutationTree<ReportStateInterface> = {
  setState: (state: ReportStateInterface,data:ReportStateInterface) => {
    state = data
  },
  saveCurrentState: (state: ReportStateInterface) => {
    console.log('saved')
    state = state
  },
}
export default mutation;
