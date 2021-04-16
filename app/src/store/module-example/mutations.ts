import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  },
  setIsOpen ( state: ExampleStateInterface, isOpen: boolean ) {
    state.isOpen = isOpen;
  },
  invertIsOpen ( state: ExampleStateInterface) {
    state.isOpen = !state.isOpen;
  }
};

export default mutation;
