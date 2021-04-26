import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AdminStateInterface } from './state';
import {UserInterface} from 'src/types/user/user';
import api from 'src/api/restApi';
function getIndexInSourceById(source:{id?:unknown}[], id: number | null | undefined){
  if(!id || !source) return -1;
  for(let i=0;i< source.length;i++){
    if(source[i].id ==id){
      return i;
    }
  }
  return -1;
}

const actions: ActionTree<AdminStateInterface, StateInterface> = {
  async getUsers(context){
    try{
      const res = await api.getUsers()
      const data = res.data
      context.commit('setUsers',data)
      return 'Успешно'
    }catch (e) {
      if(e.response.status == 403){
        throw 'У вас нет доступа или залогинтесь опять'
      }
      throw 'Сервер ответил ошибкой'

    }
  },
  async deleteUser(context,id:number){
    try{
      const res = await api.deleteUser(id)
      const ind = getIndexInSourceById(context.state.users,id);
      context.commit('deleteUser',ind)
      return 'Успешно'
    }catch (e) {
      if(e.response.status == 403){
        throw  'У вас нет доступа или залогинтесь опять'}
      }
      throw 'Сервер ответил ошибкой'

    },
  async registrationUser(context,user){
    try{
      const res = await api.registrationUser(user)
      const data = res.data
      context.commit('addUser',data)
      context.commit('setDefaultEditedUser')
      return 'Успешно'
    }catch (e) {
      if(e.response.status == 403){
        throw 'У вас нет доступа или залогинтесь опять'
      }
      if(e.response.status == 409){
        throw 'Пользователь уже существует'
      }
      throw 'Сервер ответил ошибкой'

    }
  },
  async editUser(context,user){
    try{
      const res = await api.editUser(user)
      const data = res.data
      context.commit('editUser',{index:getIndexInSourceById(context.state.users, data.id),user:data})
      context.commit('setDefaultEditedUser')
      return 'Успешно'
    }catch (e) {
      console.error(e)
      if(e.response.status == 403){
        'У вас нет доступа или залогинтесь опять'
      }
      if(e.response.status == 409){
        throw 'Пользователь уже существует'
      }
      throw 'Сервер ответил ошибкой'

    }
  },
  async setChairman(context,user:UserInterface){
    try{
      if(!user){
        console.error('IN setChairman user is null')
        return;
      }
      if(!user.id) {
        console.error('IN setChairman user.id is null')
        return;
      }
      if(!user.chairman || !user.chairman.id) {
        console.error('IN setChairman user.chairman || user.chairman.id is null')
        return;
      }
      const res = await api.setChairman(user.chairman.id,user.id)
      const data = res.data
      context.commit('editUser',{index:getIndexInSourceById(context.state.users, data.id),user:data})
      context.commit('setDefaultEditedUser')
      return 'Успешно'
    }catch (e) {
      console.error(e)
      if(e.response.status == 403){
        throw 'У вас нет доступа или залогинтесь опять'
      }
      throw 'Неудачно'
    }
  },
  async resetPassword(context,user){
    try{
      const res = await api.resetPassword(user)
      const data = res.data
      context.commit('editUser',{index:getIndexInSourceById(context.state.users, data.id),user:data})
      context.commit('setDefaultEditedUser')
      return 'Успешно'
    }catch (e) {
      if(e.response.status == 403){
        'У вас нет доступа или залогинтесь опять'
      }
      throw 'Сервер ответил ошибкой'
    }
  },
  async setRoles(context,user:UserInterface){
    try{
      if(!user){
        console.error('IN setRoles user is null')
        return;
      }
      if(!user.roles){
        console.error('IN setRoles user.roles is null')
        return;
      }
      if(!user.id){
        console.error('IN setRoles user.id is null')
        return;
      }
      const res = await api.setRoles(user)
      const data = res.data
      context.commit('editUser',{index:getIndexInSourceById(context.state.users, data.id),user:data})
      context.commit('setDefaultEditedUser')
      return 'Успешно'
    }catch (e) {
      console.error(e)
      if(e.response.status == 403){
        throw 'У вас нет доступа или залогинтесь опять'
      }
      throw e.response.data.message
    }
  },
};

export default actions;
