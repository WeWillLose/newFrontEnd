<template>
  <q-stepper
    class="bg-transparent"
    v-model="step"
    ref="stepper"
    color="primary"
    keep-alive
    active-color="purple"
    vertical
    animated
    header-nav
  >
    <q-step
      :name="1"
      prefix="1"
      title="Инфорамция"
      :error="tablesStepperState.meta.error"
      :done="tablesStepperState.meta.done"
    >
      <meta-title ref="meta"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="2"
      prefix="2"
      title="Камменарии"
      :error="tablesStepperState.comment.error"
      :done="tablesStepperState.comment.done"
    >
      <comment-table ref="comment_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="3"
      prefix="3"
      title="Успеваемость по предметам, не вынессеным на экзамены"
      :error="tablesStepperState.progress_exam.error"
      :done="tablesStepperState.progress_exam.done"
    >
      <progress-exam-table ref="progress_exam_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="4"
      prefix="4"
      title="Select campaign settings"
      :error="tablesStepperState.progress.error"
      :done="tablesStepperState.progress.done"
    >
      <progress-table ref="progress_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="5"
      prefix="5"
      title="Select campaign settings"
      :error="tablesStepperState.creation.error"
      :done="tablesStepperState.creation.done"
    >
      <creation-table ref="creation_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="6"
      prefix="6"
      title="Select campaign settings"
      :error="tablesStepperState.proective.error"
      :done="tablesStepperState.proective.done"
    >
      <proective-table ref="proective_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="7"
      prefix="7"
      title="Select campaign settings"
      :error="tablesStepperState.class_rooms.error"
      :done="tablesStepperState.class_rooms.done"
    >
      <class-rooms-table ref="class_rooms_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="8"
      prefix="8"
      title="Select campaign settings"
      :error="tablesStepperState.complex.error"
      :done="tablesStepperState.complex.done"
    >
      <complex-table ref="complex_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="9"
      prefix="9"
      title="Select campaign settings"
      :error="tablesStepperState.education.error"
      :done="tablesStepperState.education.done"
    >
      <education-table ref="education_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="10"
      prefix="10"
      title="Select campaign settings"
      :error="tablesStepperState.programs.error"
      :done="tablesStepperState.programs.done"
    >
      <programs-table ref="programs_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="11"
      prefix="11"
      title="Select campaign settings"
      :error="tablesStepperState.reconstruction.error"
      :done="tablesStepperState.reconstruction.done"
    >
      <reconstruction-table ref="reconstruction_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="12"
      prefix="12"
      title="Select campaign settings"
      :error="tablesStepperState.sdo.error"
      :done="tablesStepperState.sdo.done"
    >
      <s-d-o-table ref="sdo_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="13"
      prefix="13"
      title="Select campaign settings"
      :error="tablesStepperState.teachingaids.error"
      :done="tablesStepperState.teachingaids.done"
    >
      <teachingaids-table ref="teachingaids_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="14"
      prefix="14"
      title="Select campaign settings"
      :error="tablesStepperState.working_program.error"
      :done="tablesStepperState.working_program.done"
    >
      <working-program-table ref="working_program_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="15"
      prefix="15"
      title="Select campaign settings"
      :error="tablesStepperState.circle.error"
      :done="tablesStepperState.circle.done"
    >
      <circle-table ref="circle_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="16"
      prefix="16"
      title="Select campaign settings"
      :error="tablesStepperState.events.error"
      :done="tablesStepperState.events.done"
    >
      <events-table ref="events_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="17"
      prefix="17"
      title="Select campaign settings"
      :error="tablesStepperState.institutions.error"
      :done="tablesStepperState.institutions.done"
    >
      <institutions-table ref="institutions_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="18"
      prefix="18"
      title="Select campaign settings"
      :error="tablesStepperState.plan.error"
      :done="tablesStepperState.plan.done"
    >
      <plan-table ref="plan_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="19"
      prefix="19"
      title="Select campaign settings"
      :error="tablesStepperState.activity.error"
      :done="tablesStepperState.activity.done"
    >
      <activity-table ref="activity_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="20"
      prefix="20"
      title="Select campaign settings"
      :error="tablesStepperState.coolhours.error"
      :done="tablesStepperState.coolhours.done"
    >
      <coolhours-table ref="coolhours_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="21"
      prefix="21"
      title="Select campaign settings"
      :error="tablesStepperState.obz.error"
      :done="tablesStepperState.obz.done"
    >
      <o-b-z-table ref="obz_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="22"
      prefix="22"
      title="Select campaign settings"
      :error="tablesStepperState.plan_group.error"
      :done="tablesStepperState.plan_group.done"
    >
      <plan-group-table ref="plan_group_table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="23"
      prefix="23"
      title="Select campaign settings"
      :error="tablesStepperState.contest.error"
      :done="tablesStepperState.contest.done"
    >
      <contest-table ref="contest-table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="24"
      prefix="24"
      title="Select campaign settings"
      :error="tablesStepperState.participation.error"
      :done="tablesStepperState.participation.done"
    >
      <participation-table ref="participation-table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="25"
      prefix="25"
      title="Select campaign settings"
      :error="tablesStepperState.qualification.error"
      :done="tablesStepperState.qualification.done"
    >
      <qualification-table ref="qualification-table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="26"
      prefix="26"
      title="Select campaign settings"
      :error="tablesStepperState.selfeducation.error"
      :done="tablesStepperState.selfeducation.done"
    >
      <selfeducation-table ref="selfeducation-table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="27"
      prefix="27"
      title="Select campaign settings"
      :error="tablesStepperState.seminars.error"
      :done="tablesStepperState.seminars.done"
    >
      <seminars-table ref="seminars-table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="28"
      prefix="28"
      title="Select campaign settings"
      :error="tablesStepperState.technologies.error"
      :done="tablesStepperState.technologies.done"
    >
      <technologies-table ref="technologies-table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="29"
      prefix="29"
      title="Select campaign settings"
      :error="tablesStepperState.experience.error"
      :done="tablesStepperState.experience.done"
    >
      <experience-table ref="experience-table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="30"
      prefix="30"
      title="Select campaign settings"
      :error="tablesStepperState.interaction.error"
      :done="tablesStepperState.interaction.done"
    >
      <interaction-table ref="interaction-table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="31"
      prefix="31"
      title="Select campaign settings"
      :error="tablesStepperState.subject.error"
      :done="tablesStepperState.subject.done"
    >
      <subject-table ref="subject-table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="32"
      prefix="32"
      title="Select campaign settings"
      :error="tablesStepperState.manual.error"
      :done="tablesStepperState.manual.done"
    >
      <manual-table ref="manual-table"/>
      <q-stepper-navigation>
        <q-btn @click="onNext" color="primary" label="Продолжить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="33"
      prefix="33"
      title="Итог"
      :error="tablesStepperState.participation.error"
      :done="tablesStepperState.participation.done"
    >
      <report-summary/>
      <q-stepper-navigation>
        <q-btn @click="onFinish" color="primary" label="Закончить"/>
        <q-btn flat color="primary" @click="onBack" label="Назад" class="q-ml-sm"/>
      </q-stepper-navigation>
    </q-step>

  </q-stepper>
</template>

<script lang="ts">

  import {reactive, ref, Ref,onMounted,onActivated,defineComponent} from '@vue/composition-api'
  import {createNamespacedHelpers} from 'vuex-composition-helpers';
  import MetaTitle from 'components/report/report_tables/meta/MetaTitle.vue'
  import CommentTable from 'components/report/report_tables/1/CommentTable.vue';
  import ProgressExamTable from 'src/components/report/report_tables/1/ProgressExamTable.vue'
  import ProgressTable from 'src/components/report/report_tables/1/ProgressTable.vue'
  import CreationTable from 'src/components/report/report_tables/2/CreationTable.vue'
  import ProectiveTable from 'src/components/report/report_tables/2/ProectiveTable.vue'
  import EducationTable from 'components/report/report_tables/3/EducationTable.vue';
  import ProgramsTable from 'components/report/report_tables/3/ProgramsTable.vue';
  import ClassRoomsTable from 'components/report/report_tables/3/ClassRoomsTable.vue';
  import ComplexTable from 'components/report/report_tables/3/ComplexTable.vue';
  import ReconstructionTable from 'components/report/report_tables/3/ReconstructionTable.vue';
  import SDOTable from 'components/report/report_tables/3/SDOTable.vue';
  import TechnologiesTable from 'components/report/report_tables/7/TechnologiesTable.vue';
  import TeachingaidsTable from 'components/report/report_tables/3/TeachingaidsTable.vue';
  import WorkingProgramTable from 'components/report/report_tables/3/WorkingProgramTable.vue';
  import CircleTable from 'components/report/report_tables/4/CircleTable.vue';
  import EventsTable from 'components/report/report_tables/4/EventsTable.vue';
  import InstitutionsTable from 'components/report/report_tables/5/ActivityTable.vue';
  import PlanTable from 'components/report/report_tables/4/PlanTable.vue';
  import ActivityTable from 'components/report/report_tables/5/ActivityTable.vue';
  import CoolhoursTable from 'components/report/report_tables/5/CoolhoursTable.vue';
  import OBZTable from 'components/report/report_tables/5/OBZTable.vue';
  import PlanGroupTable from 'components/report/report_tables/5/PlanGroupTable.vue';
  import ContestTable from 'components/report/report_tables/6/ContestTable.vue';
  import ParticipationTable from 'components/report/report_tables/6/ParticipationTable.vue';
  import QualificationTable from 'components/report/report_tables/6/QualificationTable.vue';
  import SelfeducationTable from 'components/report/report_tables/6/SelfeducationTable.vue';
  import SeminarsTable from 'components/report/report_tables/6/SeminarsTable.vue';
  import ExperienceTable from 'components/report/report_tables/8/ExperienceTable.vue';
  import InteractionTable from 'components/report/report_tables/9/InteractionTable.vue';
  import SubjectTable from 'components/report/report_tables/10/SubjectTable.vue';
  import ManualTable from 'components/report/report_tables/11/ManualTable.vue';
  import ReportSummary from 'components/report/report_tables/meta/ReportSummary.vue';
  import api from 'src/api/restApi';


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
      CommentTable,MetaTitle,ProgressExamTable,ProgressTable,CreationTable,ProectiveTable,ClassRoomsTable,EducationTable,ReconstructionTable,SDOTable,ProgramsTable,ComplexTable,ReportSummary},
    setup(props,context) {
      const step = ref(1)
      const stepper = ref(null)
      const meta = ref(null)
      const comment_table = ref(null)
      const complex-table = ref(null)
      const reportData = ReportTableHelper.useGetters(['getData']).getData as unknown as Record<string, unknown>;
      const metaData = MetaHelper.useGetters(['getData']).getData as unknown as Record<string, unknown>;
      const store=() => context.root.$store;
      const tablesStepperState:Record<string,Record<string,boolean>> = ReportTableHelper.useState(['tablesState']).tablesState as unknown as Record<string,Record<string,boolean>>
      console.log(tablesStepperState)
      return {step,stepper,meta,comment_table,tablesStepperState,lastInd,reportData,metaData,store,}
    },
    methods: {
      loader(name:string):unknown{
        if(name) return ()=>import(`../report_tables/${name}`)
        return null
      },
      onBack():void{
        this.stepper.previous()
      },
      prepareData():unknown{
        const result: Record<string, unknown> = this.reportData
        result['data']['computed'] = {}
        console.log(this.store())
        result['data']['computed']['sum1'] = this.store().getters['report/comment/getScore']
          +this.store().getters['report/creation/getScore']+ this.store().getters['report/proective/getScore']
        this.store().commit('report/meta/setSum1', result['data']['computed']['sum1'])
        result['data']['computed']['sum2'] = this.store().getters["report/class_rooms/getScore"] + this.store().getters["report/complex/getScore"] +
          this.store().getters["report/education/getScore"] + this.store().getters["report/programs/getScore"] +
          this.store().getters["report/reconstruction/getScore"] + this.store().getters["report/sdo/getScore"] +
          this.store().getters["report/teaching_aids/getScore"] + this.store().getters["report/working_program/getScore"] +
          this.store().getters["report/circle/getScore"] + this.store().getters["report/events/getScore"] +
          this.store().getters["report/institutions/getScore"] + this.store().getters["report/plan/getScore"] +
          this.store().getters["report/activity/getScore"] + this.store().getters["report/cool_hours/getScore"] +
          this.store().getters["report/obz/getScore"] + this.store().getters["report/plan_group/getScore"] +
          this.store().getters["report/contest/getScore"] + this.store().getters["report/participation/getScore"] +
          this.store().getters["report/qualification/getScore"] + this.store().getters["report/self_education/getScore"] +
          this.store().getters["report/seminars/getScore"] + this.store().getters["report/technologies/getScore"] +
          this.store().getters["report/experience/getScore"] + this.store().getters["report/interaction/getScore"] +
          this.store().getters["report/subject/getScore"] + this.store().getters["report/manual/getScore"]
        this.store().commit('report/meta/setSum2', result['data']['computed']['sum2'])
        return result;
      },
      onFinish():void{
        const data = this.prepareData()
        console.log(data)
        api.saveReport(data).then(t=>console.log(t))
        return;
      },
      onNext(): void {
        // if(this.meta?.hasError()){
        //   console.log('Meta Has Error')
        //   tablesStepperState.meta.errors = true
        //   tablesStepperState.meta.done = false
        //   this.stepper.goTo(1)
        //   return;
        // }
        // tablesStepperState.meta.errors = false
        // tablesStepperState.meta.done = true
        //
        // if(this.comment_table?.hasError()){
        //   console.log('Has Error')
        //   tablesStepperState.comment.errors = true
        //   tablesStepperState.comment.done = false
        //   this.stepper.goTo(2)
        //   return;
        // }
        // tablesStepperState.comment.errors = false
        // tablesStepperState.comment.done = true
        this.stepper.next()
        if(this.step==33){
          this.prepareData()
        }
      }
    },
  })
</script>

<style scoped>

</style>
