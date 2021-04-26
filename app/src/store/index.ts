import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import { ExampleStateInterface } from './module-example/state';
import { HeaderStateInterface } from './header/state';
import report from './report/'
import admin from './admin/'

import createPersistedState from 'vuex-persistedstate'
import example from './module-example';
import header from './header';
import user from './user';
import {UserStateInterface} from 'src/store/user/state';
import {ReportStateInterface} from 'src/store/report/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: ExampleStateInterface
  header: HeaderStateInterface
  user: UserStateInterface
  report: ReportStateInterface
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({

    modules: {
      example,
      header,
      user,
      report,
      admin
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    // strict: !!process.env.DEBUGGING,
    plugins: [createPersistedState()]
  });

  return Store;
});
