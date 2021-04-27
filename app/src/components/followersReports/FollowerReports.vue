<template>
  <q-table :data="data" :columns="columns" row-key="id" >
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
          <q-btn label="Редактировать" size="sm" class="q-mr-sm" color="blue"
                @click="editReportHandler(props.row)"></q-btn>
          <q-btn label="Удалить" size="sm" color="red" ></q-btn>
          <q-btn label="Скачать отчет" size="sm" color="red"></q-btn>
          <q-btn label="Скачать лист" size="sm" color="red" ></q-btn>
        </q-td>
      </q-tr>
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
    setup(props,context) {
      const data = ref([])
      const {columns} = followersReportsHelper.useState(['columns'])
      const state = ()=> context.root.$store
      return {columns,data,UserUtils,state}
    },
    methods:{
      async getFollowersReports() {
        let res = await api.getFollowersReports()
        this.data = [...res.data]
      },
      async editReportHandler(report:Record<string,unknown>){
       const data =  await api.getReport(report.id)
      this.state().commit('report/setDefault');
      this.state().commit('report/setTablesData',data.data);
       this.$router.push('createReport')
      }
    },
    created(){
      this.getFollowersReports()
    }
  }
</script>

<style scoped>

</style>
