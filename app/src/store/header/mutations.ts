import { MutationTree } from 'vuex';
import { HeaderInterface } from './state';


const mutation: MutationTree<HeaderInterface> = {
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  },
  setIsLeftDrawerOpen ( state: HeaderInterface, isOpen: boolean ) {
    state.isLeftDrawerOpen = isOpen;
  },
  invertIsOpen ( state: HeaderInterface) {
    state.isLeftDrawerOpen = !state.isLeftDrawerOpen;
  },
};

export default mutation;
