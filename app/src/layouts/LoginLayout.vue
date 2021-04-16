<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="main_background">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
  import {defineComponent, ref} from '@vue/composition-api';
  export default defineComponent({

    name: 'LoginLayout',
    // eslint-disable-next-line vue/no-unused-components
    components: {},
    setup() {
      return { }
    },
    methods:{

    }
  });
</script>

<style scoped>

</style>
