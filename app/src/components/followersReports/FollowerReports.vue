<template>
  <q-table :data="data" :columns="columns" row-key="id">
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="author" :props="props">
          {{UserUtils.getShortFio(props.row.author)}}
        </q-td>
        <q-td key="name" :props="props">
          {{ props.row.reportName }}
        </q-td>
        <q-td key="status" :props="props">
          {{props.row.status }}
        </q-td>
        <q-td key="createdDate" :props="props">
          {{props.row.createdDate}}
        </q-td>
        <q-td key="actions" :props="props">
          <q-btn label="Редактировать отчет" size="sm" class="q-mr-sm" color="blue"
                 @click="editReportDataHandler(props.row)"></q-btn>
          <q-btn label="Редактировать статус" size="sm" class="q-mr-sm" color="blue"
                 @click="showReportDataDialog(props.row)"></q-btn>
          <q-btn label="Удалить" size="sm" color="red"></q-btn>
          <q-btn label="Скачать отчет" size="sm" color="red"></q-btn>
          <q-btn label="Скачать лист" size="sm" color="red"></q-btn>
        </q-td>
      </q-tr>
      <q-dialog v-model="editedReportDialog">
        <q-card class="add_row_dialog bg-secondary">
          <q-form
            @submit="editReportStatusHandler">
            <q-card-section>
              <div class="text-h6">Сменить статус</div>
            </q-card-section>
            <q-card-section class="">
              <div class="row q-gutter-md q-ma-md">
                <q-select
                  class="col-12 col-md"
                  v-model="editedReport.status"
                  :options="['CHECKED','UNCHECKED','COMPLETED']"></q-select>
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" type="submit"></q-btn>
            </q-card-actions>
          </q-form>
        </q-card>
      </q-dialog>
    </template>
    <template v-slot:top-right>
      <q-input borderless dense debounce="300" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>
    </template>
  </q-table>
</template>

<script lang="ts">
  import UserUtils from 'src/utils/user/user';

  import {createNamespacedHelpers} from 'vuex-composition-helpers';
  import {toRefs, ref} from "@vue/composition-api";
  import api from "src/api/restApi";

  const followersReportsHelper = createNamespacedHelpers('followersReports')
  const reportHelper = createNamespacedHelpers('report')
  export default {
    name: 'FollowerReports',
    setup(props, context) {
      const data = ref([])
      const editedReport = ref({})
      const editedReportDialog = ref(false)
      const {columns} = followersReportsHelper.useState(['columns'])
      const state = () => context.root.$store
      return {columns, data, UserUtils, state, editedReport, editedReportDialog}
    },
    methods: {
      async getFollowersReports() {
        let res = await api.getFollowersReports()
        this.data = [...res.data]
      },
      async editReportDataHandler(report: Record<string, unknown>) {
        const data = await api.getReport(report.id)
        this.state().commit('report/setDefault');
        this.state().commit('report/setTablesData', data.data);
        this.$router.push('createReport')
      },
      async editReportStatusHandler() {
        await api.updateReportStatus(this.editedReport.id,this.editedReport.status)
        this.getFollowersReports()
      },
      showReportDataDialog(report: Record<string, unknown>) {
        this.editedReport = report
        this.editedReportDialog = true

      }
    },
    created() {
      this.getFollowersReports()
    }
  }
</script>

<style scoped>

</style>
