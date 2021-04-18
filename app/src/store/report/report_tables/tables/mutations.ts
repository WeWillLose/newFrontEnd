import { MutationTree } from 'vuex';
import {ReportTableStateInterface} from '../types';


const mutation: MutationTree<ReportTableStateInterface> = {
  addRow:(state:ReportTableStateInterface, data:ReportTableStateInterface) =>{
    if (data.editedIndex > -1) {
      Object.assign(state.rows[data.editedIndex], data.editedItem);
    } else {
      state.rows.push(data.editedItem);
    }
  },
  setRow:(state: ReportTableStateInterface, data:ReportTableStateInterface) =>{
    if (!data ) {
      state.rows = Object.assign([], []);
    } else {
      state.rows = Object.assign([], data);
    }
  },
  deleteItem:(state: ReportTableStateInterface, item) =>{
    const index = state.rows.indexOf(item);
    state.rows.splice(index, 1);
  },
  editItem:(state: ReportTableStateInterface, item) =>{
    state.editedIndex = state.rows.indexOf(item);
    state.editedItem = Object.assign({}, item);
  },
  setDefault: (state) =>{
    state.editedItem = Object.assign({}, state.defaultItem)
    state.editedIndex = -1
  },
};

export default mutation;
