<template>
  <q-page class="q-pa-md">
    <report-list/>
  </q-page>
</template>

<script lang="ts">
  import {defineComponent, ref} from '@vue/composition-api';
  import ReportList from 'components/report/my_reports/ReportList.vue'

  export default defineComponent({
    name: 'MyReportsPage',
    components: {
      ReportList
    },
    setup() {
      return {}
    }
  })
</script>

<style scoped>

</style>
