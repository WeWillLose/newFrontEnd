import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';
import {UserInterface} from "src/types/user/user";

const mutation: MutationTree<UserStateInterface> = {
  setUser(state: UserStateInterface,user:UserInterface | null){
    state.user = user;
  },
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  },
  // setIsOpen ( state: UserStateInterface, isOpen: boolean ) {
  //
  // },
  // invertIsOpen ( state: UserStateInterface) {
  // }
};

export default mutation;
