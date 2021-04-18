<template>
    <q-page>
      <div class="q-pa-md ">
        <report-stepper></report-stepper>
      </div>
    </q-page>
</template>

<script>
  import ReportStepper from "../components/report/report_stepper/ReportStepper.vue";
    export default {
        name: 'CreateReportPage',
      // eslint-disable-next-line vue/no-unused-components
      components:{ReportStepper}
    }
</script>

<style scoped>

</style>
