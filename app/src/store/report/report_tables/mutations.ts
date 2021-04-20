import {MutationTree} from 'vuex';
import {ReportTableStateInterface} from '../types';


const mutation: MutationTree<ReportTableStateInterface> = {
  addRow: (state: ReportTableStateInterface) => {
    if (state.editedIndex > -1) {
      Object.assign(state.rows[state.editedIndex], state.editedItem);
    } else {
      state.rows.push(state.editedItem);
    }
  },
  setRow: (state: ReportTableStateInterface, row: Record<string, unknown>) => {
    if (!row) {
      state.rows = Object.assign([], []);
    } else {
      state.rows = Object.assign([], row);
    }
  },
  deleteItem: (state: ReportTableStateInterface, item: Record<string, unknown>) => {
    const index = state.rows.indexOf(item);
    if (index > -1)
      state.rows.splice(index, 1);
    else console.warn(`item: ${item} not found in ${state.rows}`)
  },
  editItem: (state: ReportTableStateInterface, item: Record<string, unknown>) => {
    state.editedIndex = state.rows.indexOf(item);
    if (state.editedIndex > -1)
      state.editedItem = Object.assign({}, item);
    else console.warn(`item: ${item} not found in ${state.rows}`)
  },
  setDefault: (state) => {
    state.editedItem = Object.assign({}, state.defaultItem)
    state.editedIndex = -1
  },
};

export default mutation;
