import { MutationTree } from 'vuex';
import { AdminStateInterface } from './state';
import {UserInterface} from 'src/types/user/user';
import _ from 'lodash';

const mutation: MutationTree<AdminStateInterface> = {
  deleteUser(state: AdminStateInterface,index){
    try{
      state.users.splice(index, 1);
    }catch (e) {
      console.error(e)
    }
  },
  setUsers(state: AdminStateInterface,users:UserInterface[]){
    try{
      state.users = _.cloneDeep(users)
    }catch (e) {
      console.error(e)
    }
  },
  addUser(state: AdminStateInterface,user){
    try{
      state.users.push(_.cloneDeep(user))
    }catch (e) {
      console.error(e)
    }
  },
  editUser(state: AdminStateInterface,data:{user:UserInterface,index:number}){
    try{
      const copy_user = _.cloneDeep(data.user)
      // state.users.splice(data.index,1)
      // state.users.splice(data.index,1)
      state.users.splice(data.index, 1, {
        ... copy_user,
      })
    }catch (e) {
      console.error(e)
    }
  },
  setDefaultEditedUser(state: AdminStateInterface){
    try{
      state.editedUser =  _.cloneDeep(state.defaultUser)
    }catch (e) {
      console.error(e)
    }
  },
  setEditedUser(state: AdminStateInterface,user:UserInterface){
    try{
      if(!user){
        this.setDefaultEditedUser(state)
      }
      if(!user.chairman){
        user.chairman = {}
      }
      state.editedUser = _.cloneDeep(user)
    }catch (e) {
      console.error(e)
    }
  }
};

export default mutation;
