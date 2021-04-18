<template>
  <q-stepper
    v-model="step"
    ref="stepper"
    color="primary"
    keep-alive
    active-color="purple"
    animated
  >
    <q-step
      :name="1"
      prefix="1"
      title="Инфорамция"
      :error="tablesStepperState.meta.errors"
      :done="tablesStepperState.meta.done"
    >
      <meta-title ref="meta"/>
    </q-step>
    <q-step
      :name="2"
      prefix="2"
      title="Камменарии"
      :error="tablesStepperState.comment.errors"
      :done="tablesStepperState.comment.done"
    >
      <comment-table ref="comment_table"/>
    </q-step>
    <q-step
      :name="3"
      prefix="3"
      title="Select campaign settings"
      :done="step > 1"
    >
      Test tesdt

    </q-step>

    <template v-slot:navigation>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary"
               :label="step===0?'Начать':step===lastInd?'Закончить':'Продолжить'"/>
        <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </template>
  </q-stepper>
</template>

<script lang="ts">

  import {reactive, ref, Ref,onMounted,onActivated,defineComponent} from '@vue/composition-api';
  import CommentTable from 'components/report/report_tables/CommentTable.vue';
  import MetaTitle from "components/report/meta/MetaTitle.vue";
  import {createNamespacedHelpers} from 'vuex-composition-helpers';

  const CommentTableHelper = createNamespacedHelpers('report_tables/comment')
  const ReportTableHelper = createNamespacedHelpers('report')
  const MetaHelper = createNamespacedHelpers('report/meta')

  const tablesStepperState = {
    meta: {
      errors: false,
      done:false
    },
    comment: {
      errors: false,
      done:false
    }
  }
  const lastInd = 3;
  export default defineComponent({
    name: 'ReportStepper',
    components: {CommentTable,MetaTitle},
    setup(props,context) {
      const step = ref(1)
      const stepper = ref(null)
      const meta = ref(null)
      const comment_table = ref(null)
      const reportData = ReportTableHelper.useGetters(['getData']).getData as Record<string, unknown>;
      const metaData = MetaHelper.useGetters(['getData']).getData as Record<string, unknown>;
      const store = ()=>context.root.$store;
      return {step,stepper,meta,comment_table,tablesStepperState,lastInd,reportData,metaData,store}
    },
    methods: {
      prepareData():void{
        const result = {} as Record<string,unknown>
        result['tables'] = this.reportData.tables
        result['meta'] = this.reportData.meta
        this.store().commit('report/meta/setDefaultState')
        this.store().commit('report/comment/setDefault')
        console.log(result)
      },
      onNext(): void {
        if(this.meta?.hasError()){
          console.log('Meta Has Error')
          tablesStepperState.meta.errors = true
          tablesStepperState.meta.done = false
          this.stepper.goTo(1)
          return;
        }
        tablesStepperState.meta.errors = false
        tablesStepperState.meta.done = true

        if(this.comment_table?.hasError()){
          console.log('Has Error')
          tablesStepperState.comment.errors = true
          tablesStepperState.comment.done = false
          this.stepper.goTo(2)
          return;
        }
        tablesStepperState.comment.errors = false
        tablesStepperState.comment.done = true

        if(this.step == lastInd){
          this.prepareData()
          return;
        }
        this.stepper.next()

      }
    },
  })
</script>

<style scoped>

</style>
