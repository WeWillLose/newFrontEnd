import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import { ExampleStateInterface } from './module-example/state';
import { HeaderInterface } from './header/state';

import example from './module-example';
import header from './header';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: ExampleStateInterface
  header: HeaderInterface
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      example,
      header
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });

  return Store;
});
