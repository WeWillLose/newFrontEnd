<template>
    <q-page>
      <div class="q-pa-md">
        <report-stepper></report-stepper>
      </div>
    </q-page>
</template>

<script lang="ts">
  import ReportStepper from '../components/report/report_stepper/ReportStepper.vue';
  import {defineComponent,ref} from '@vue/composition-api';
    export default defineComponent({
        name: 'CreateReportPage',
      // eslint-disable-next-line vue/no-unused-components
      components:{ReportStepper},
      setup(){
        const isEditing =  ref(false)
          return{isEditing}
      },
      methods: {
        preventNav(event) {
          if (!this.isEditing) return
          this.$store.commit('report/saveCurrentState')
        },
      },
      beforeMount() {
        window.addEventListener('beforeunload', this.preventNav)
        this.$once('hook:beforeDestroy', () => {
          window.removeEventListener('beforeunload', this.preventNav);
        })
      },
      beforeRouteLeave(to, from, next) {
        next();
      }
    })
</script>

<style scoped>

</style>
