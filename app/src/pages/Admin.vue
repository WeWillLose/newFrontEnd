<template>
  <q-page class="q-pa-md">
    <admin-table />
  </q-page>

</template>

<script lang="ts">
  import {computed, defineComponent} from '@vue/composition-api';
    import AdminTable from 'src/components/admin/AdminTable.vue'
    import {UserInterface} from '../types/user/user';
  import notify from "src/api/notifyApi";

    export default defineComponent({
        name: 'AdminPage',
      components:{AdminTable},
      setup(props,context){
        context.root.$store.dispatch('admin/getUsers').catch(t=>notify.showErrorNotify(t))
        return{}
      },
      // before(): void {
      //     this.store.d
      // }
    })
</script>

<style scoped>

</style>
