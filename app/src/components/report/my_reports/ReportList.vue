<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <report v-for="report in reports"
            :key="report.id"
            :id="report.id"
            :reportName="report.reportName"
            :createdDate="report.createdDate"
            :status="report.status"
            :createdBy="report.createdBy"
    />
  </div>
</template>

<script>
  import Report from './Report.vue'
  import {defineComponent,ref} from '@vue/composition-api'
  import api from "../../../api/restApi";
  import notify from "src/api/notifyApi";

  export default defineComponent({
    name: 'ReportList',
    components:{Report},
    setup() {
      const reports = ref(null)
      return {reports}
    },
    computed:{
      getReportsCurrentUser(){
        return this.getReportsHelper().then(t=>{return t})
      }
    },
    methods:{
      async getReportsHelper(){
        try{
          let response = await api.getReportsCurrentUser()
          let data = response.data
          this.reports = data
        }catch (e) {
          if(e.response.status == 403) notify.showErrorNotify('У вас нет доступа или залогинтесь опять')
          else notify.showErrorNotify('Сервер ответил ошибкой')
          console.log(e.response.data.message)
        }
      }
    },
    mounted(){
      this.getReportsHelper()
    }
  })
</script>

<style scoped>

</style>
