<template>
  <q-page class="q-pa-md">
    <report-table></report-table>
  </q-page>
</template>

<script lang="ts">
  import {defineComponent, ref} from '@vue/composition-api';

  export default defineComponent({
    name: 'MyReportsPage',
    components: {
      ReportTable: () => import('src/components/report/my_reports/ReportTable.vue')
    },
    setup() {
      return {}
    }
  })
</script>

<style scoped>

</style>
