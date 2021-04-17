import Vue from 'vue'
export interface NotifyInterface {
  showErrorNotify(message: string):void
  showPositiveNotify(message:string):void
  showForbiddenNotify():void
}
export class Notify implements NotifyInterface {
  showErrorNotify(message:string):void {
    Vue.prototype.$q.notify({type:'negative',message:message})

  };
  showPositiveNotify(message:string):void {
    Vue.prototype.$q.notify({type:'positive',message:message})
  };
  showForbiddenNotify():void {
    Vue.prototype.$q.notify({type:'negative',message:'У вас нет прав или залогинтесь опять'})
  };
}
const notify = new Notify();
export default notify;
