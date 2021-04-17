import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {boot} from 'quasar/wrappers';
import {User, UserLoginInterface} from 'src/types/user/user';
import api from "src/api/restApi";
import {ApiInterface} from "src/api/restApi";


declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
    $api: ApiInterface
  }
}

export default boot(({Vue}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$axios = axios;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$api = api;
});
