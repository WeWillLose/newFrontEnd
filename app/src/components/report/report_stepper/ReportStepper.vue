<template>
  <q-stepper
    class="bg-transparent"
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
      :error="tablesStepperState.meta.error"
      :done="tablesStepperState.meta.done"
    >
      <meta-title ref="meta"/>
    </q-step>

    <q-step
      :name="2"
      prefix="2"
      title="Камменарии"
      :error="tablesStepperState.comment.error"
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
      <progress-exam-table/>
    </q-step>
    <q-step
      :name="4"
      prefix="4"
      title="Select campaign settings"
      :done="step > 2"
    >
      <progress-table/>
    </q-step>
    <q-step
      :name="5"
      prefix="5"
      title="Select campaign settings"
      :done="step > 3"
    >
      <creation-table/>
    </q-step>
    <q-step
      :name="6"
      prefix="6"
      title="Select campaign settings"
      :done="step > 4"
    >
      <proective-table/>
    </q-step>
    <q-step
      :name="7"
      prefix="7"
      title="Select campaign settings"
      :done="step > 5"
    >
      <class-rooms-table/>
    </q-step>
    <q-step
      :name="8"
      prefix="8"
      title="Select campaign settings"
      :done="step > 6"
    >
      <complex-table/>
    </q-step>
    <q-step
      :name="9"
      prefix="9"
      title="Select campaign settings"
      :done="step > 7"
    >
      <education-table/>
    </q-step>
      <q-step
        :name="10"
        prefix="10"
        title="Select campaign settings"
        :done="step > 8"
      >
        <programs-table/>
      </q-step>
    <q-step
      :name="11"
      prefix="11"
      title="Select campaign settings"
      :done="step > 9"
    >
      <reconstruction-table/></q-step>
    <q-step
      :name="12"
      prefix="12"
      title="Select campaign settings"
      :done="step > 10"
    >
      <s-d-o-table/>
    </q-step>
    <q-step
      :name="13"
      prefix="13"
      title="Select campaign settings"
      :done="step > 11"
    >
      <teachingaids-table/>
    </q-step>
    <q-step
      :name="14"
      prefix="14"
      title="Select campaign settings"
      :done="step > 12"
    >
      <working-program-table/>
    </q-step>
    <q-step
      :name="15"
      prefix="15"
      title="Select campaign settings"
      :done="step > 13"
    >
      <circle-table/>
    </q-step>
    <q-step
      :name="16"
      prefix="16"
      title="Select campaign settings"
      :done="step > 14"
    >
      <events-table/>
    </q-step>
    <q-step
      :name="17"
      prefix="17"
      title="Select campaign settings"
      :done="step > 15"
    >
      <institutions-table/>
    </q-step>
    <q-step
      :name="18"
      prefix="18"
      title="Select campaign settings"
      :done="step > 16"
    >
      <plan-table/>
    </q-step>
    <q-step
      :name="19"
      prefix="19"
      title="Select campaign settings"
      :done="step > 17"
    >
      <activity-table/>
    </q-step>
    <q-step
      :name="20"
      prefix="20"
      title="Select campaign settings"
      :done="step > 18"
    >
      <coolhours-table/>
    </q-step>
    <q-step
      :name="21"
      prefix="21"
      title="Select campaign settings"
      :done="step > 19"
    >
      <o-b-z-table/>
    </q-step>
    <q-step
      :name="22"
      prefix="22"
      title="Select campaign settings"
      :done="step > 20"
    >
      <plan-group-table/>
    </q-step>
    <q-step
      :name="23"
      prefix="23"
      title="Select campaign settings"
      :done="step > 21"
    >
      <contest-table/>
    </q-step>
    <q-step
      :name="24"
      prefix="24"
      title="Select campaign settings"
      :done="step > 22"
    >
      <participation-table/>
    </q-step>
    <q-step
      :name="25"
      prefix="25"
      title="Select campaign settings"
      :done="step > 23"
    >
      <qualification-table/>
    </q-step>
    <q-step
      :name="26"
      prefix="26"
      title="Select campaign settings"
      :done="step > 24"
    >
      <selfeducation-table/>
    </q-step>
    <q-step
      :name="27"
      prefix="27"
      title="Select campaign settings"
      :done="step > 25"
    >
      <seminars-table/>
    </q-step>
    <q-step
      :name="28"
      prefix="28"
      title="Select campaign settings"
      :done="step > 26"
    >
      <technologies-table/>
    </q-step>
    <q-step
      :name="29"
      prefix="29"
      title="Select campaign settings"
      :done="step > 26"
    >
      <experience-table/>
    </q-step>
    <q-step
      :name="30"
      prefix="30"
      title="Select campaign settings"
      :done="step > 27"
    >
      <interaction-table/>
    </q-step>
    <q-step
      :name="31"
      prefix="31"
      title="Select campaign settings"
      :done="step > 28"
    >
      <subject-table/>
    </q-step>
    <q-step
      :name="32"
      prefix="32"
      title="Select campaign settings"
      :done="step > 29"
    >
      <manual-table/>
    </q-step>


    <template v-slot:navigation>
      <q-separator spaced="md"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary"
               :label="step===0?'Начать':step===lastInd?'Закончить':'Продолжить'"/>
        <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </template>
  </q-stepper>
</template>

<script lang="ts">

  import {reactive, ref, Ref,onMounted,onActivated,defineComponent} from '@vue/composition-api'
  import CommentTable from 'components/report/report_tables/1/CommentTable.vue';
  import MetaTitle from "components/report/meta/MetaTitle.vue"
  import ProgressExamTable from "src/components/report/report_tables/1/ProgressExamTable.vue"
  import ProgressTable from "src/components/report/report_tables/1/ProgressTable.vue"
  import CreationTable from "src/components/report/report_tables/2/CreationTable.vue"
  import EducationTable from 'components/report/report_tables/3/EducationTable.vue';
  import ProgramsTable from "components/report/report_tables/3/ProgramsTable.vue";
  import ClassRoomsTable from 'components/report/report_tables/3/ClassRoomsTable.vue';
  import ComplexTable from "components/report/report_tables/3/ComplexTable.vue";
  import ReconstructionTable from "components/report/report_tables/3/ReconstructionTable.vue";
  import SDOTable from 'components/report/report_tables/3/SDOTable.vue';
  import {createNamespacedHelpers} from 'vuex-composition-helpers';
  import TechnologiesTable from "components/report/report_tables/7/TechnologiesTable.vue";
  import TeachingaidsTable from "components/report/report_tables/3/TeachingaidsTable.vue";
  import WorkingProgramTable from "components/report/report_tables/3/WorkingProgramTable.vue";
  import CircleTable from "components/report/report_tables/4/CircleTable.vue";
  import EventsTable from "components/report/report_tables/4/EventsTable.vue";
  import InstitutionsTable from "components/report/report_tables/5/ActivityTable.vue";
  import PlanTable from "components/report/report_tables/4/PlanTable.vue";
  import ActivityTable from "components/report/report_tables/5/ActivityTable.vue";
  import CoolhoursTable from "components/report/report_tables/5/CoolhoursTable.vue";
  import OBZTable from "components/report/report_tables/5/OBZTable.vue";
  import PlanGroupTable from "components/report/report_tables/5/PlanGroupTable.vue";
  import ContestTable from "components/report/report_tables/6/ContestTable.vue";
  import ParticipationTable from "components/report/report_tables/6/ParticipationTable.vue";
  import QualificationTable from "components/report/report_tables/6/QualificationTable.vue";
  import SelfeducationTable from "components/report/report_tables/6/SelfeducationTable.vue";
  import SeminarsTable from "components/report/report_tables/6/SeminarsTable.vue";
  import ExperienceTable from "components/report/report_tables/8/ExperienceTable.vue";
  import InteractionTable from "components/report/report_tables/9/InteractionTable.vue";
  import SubjectTable from "components/report/report_tables/10/SubjectTable.vue";
  import ManualTable from "components/report/report_tables/11/ManualTable.vue";

  const CommentTableHelper = createNamespacedHelpers('report_tables/comment')
  const ReportTableHelper = createNamespacedHelpers('report')
  const ProectiveHelper = createNamespacedHelpers('report/proective')
  const ProgressTableHelper = createNamespacedHelpers('report/progress')
  const CreationHelper = createNamespacedHelpers('report/creation')
  const ClassRoomsHelper = createNamespacedHelpers('report/class_rooms')
  const ComplexHelper = createNamespacedHelpers('report/complex')
  const EducationHelper = createNamespacedHelpers('report/education')
  const ProgramsHelper = createNamespacedHelpers('report/programs')
  const Reconstruction = createNamespacedHelpers('report/reconstruction')
  const SDOHelper = createNamespacedHelpers('report/sdo')
  const MetaHelper = createNamespacedHelpers('report/meta')

  const tablesStepperState = {
    meta: {
      error: false,
      done:false
    },
    comment: {
      error: false,
      done:false
    },
    progress_exam: {
      error: false,
      done:false
    },
    progress:{
      error:false,
      done:false
    },
    creation:{
      error:false,
      done:false
    },
    proective:{
      error:false,
      done:false
    },
    class_rooms:{
      error:false,
      done:false
    },
    complex:{
      error:false,
      done:false
    },
    education:{
      error:false,
      done:false
    },
    programs:{
      error:false,
      done:false
    },
    reconstruction:{
      error:false,
      done:false
    },
    sdo:{
      error:false,
      done:false
    },
    teachingaids: {
      error:false,
      done:false
    },
    working_program: {
      error:false,
      done:false
    },
    circle: {
      error:false,
      done:false
    },
    events: {
      error:false,
      done:false
    },
    institutions: {
      error:false,
      done:false
    },
    plan: {
      error:false,
      done:false
    },
    activity: {
      error:false,
      done:false
    },
    coolhours: {
      error:false,
      done:false
    },
    obz: {
      error:false,
      done:false
    },
    plan_group: {
      error:false,
      done:false
    },
    content: {
      error:false,
      done:false
    },
    participation: {
      error:false,
      done:false
    },
    qualification: {
      error:false,
      done:false
    },
    selfeducation: {
      error:false,
      done:false
    },
    seminars: {
      error:false,
      done:false
    },
    technologies: {
      error:false,
      done:false
    },
    experience: {
      error:false,
      done:false
    },
    interaction: {
      error:false,
      done:false
    },
    subject: {
      error:false,
      done:false
    },
    manual: {
      error:false,
      done:false
    },

  }
  const lastInd = 32;
  export default defineComponent({
    name: 'ReportStepper',
    components: {
      ManualTable,
      SubjectTable,
      InteractionTable,
      ExperienceTable,
      SeminarsTable,
      SelfeducationTable,
      QualificationTable,
      ParticipationTable,
      ContestTable,
      PlanGroupTable,
      OBZTable,
      CoolhoursTable,
      ActivityTable,
      PlanTable,
      InstitutionsTable,
      EventsTable,
      CircleTable,
      WorkingProgramTable,
      TeachingaidsTable,
      TechnologiesTable,
      CommentTable,MetaTitle,ProgressExamTable,ProgressTable,CreationTable,ClassRoomsTable,EducationTable,ReconstructionTable,SDOTable,ProgramsTable,ComplexTable},
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
