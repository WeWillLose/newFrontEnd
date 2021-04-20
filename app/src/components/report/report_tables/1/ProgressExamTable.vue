<template>
  <div class="q-gutter-sm">
    <q-table title="Успеваемость по предметам, вынессеным на экзамены" :hide-no-data="true" :data="getRows"
             :columns="getColumns"
             class="bg-transparent no-box-shadow"
    >
      <template v-slot:top-right>
        <div>
          <q-btn dense color="primary" label="Добавить строку" @click="show_dialog = true" no-caps></q-btn>
        </div>
        <div class="q-pa-sm q-gutter-sm">
          <q-dialog v-model="show_dialog">
            <q-card class="add_row_dialog bg-secondary" >
              <q-card-section>
                <div class="text-h6">Добавить строку</div>
              </q-card-section>

              <q-card-section>
                <div class="row q-gutter-md q-ma-md">
                  <q-input class="col-12 col-md" type="text" clearable v-model="getEditedItem.group" label="Группа"></q-input>
                  <q-input class="col-12 col-md" type="text" v-model="getEditedItem.subject" label="Дисциплина"></q-input>
                  <q-input class="col-12 col-md" type="number" v-model="getEditedItem.amount" label="Колво студентов"></q-input>
                </div>
                <div class="row q-gutter-md  q-ma-md">
                  <q-input class="col-12 col-md" type="number" v-model="getEditedItem.mark5" label="Кол-во оценок 5"></q-input>
                  <q-input class="col-12 col-md" type="number" v-model="getEditedItem.mark4" label="Кол-во оценок 4"></q-input>
                  <q-input class="col-12 col-md" type="number" v-model="getEditedItem.mark3" label="Кол-во оценок 3"></q-input>
                  <q-input class="col-12 col-md" type="number" v-model="getEditedItem.mark2" label="Кол-во оценок 2"></q-input>
                </div>
                <div class="row q-gutter-md  q-ma-md">
                  <q-input class="col-12 col-md " type="number" v-model="getEditedItem.progress" label="Успеваемость  (%)"></q-input>
                  <q-input class="col-12 col-md" type="number" v-model="getEditedItem.quality" label="Качество зананий (%)"></q-input>
                </div>
                <div class="row q-gutter-md  q-ma-md">
                  <q-input class="col-12" type="textarea" v-model="getEditedItem.unsuccs" autogrow maxlength="500" label="Неуспевающие"></q-input>
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Добавить" color="accent" v-close-popup @click="addRowHandler"></q-btn>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>

      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="group" :props="props">
            <q-input ref="groupField"></q-input>
          </q-td>
          <q-td key="subject" :props="props">
            <q-input v-model="props.row.subject"></q-input>
          </q-td>
          <q-td key="amount" :props="props">
            <q-input type="number" v-model="props.row.amount"></q-input>
          </q-td>
          <q-td key="mark5" :props="props">
            <q-input type="number" v-model="props.row.mark5"></q-input>
          </q-td>
          <q-td key="mark4" :props="props">
            <q-input type="number" v-model="props.row.mark4"></q-input>
          </q-td>
          <q-td key="mark3" :props="props">
            <q-input type="number" v-model="props.row.mark3"></q-input>
          </q-td>
          <q-td key="mark2" :props="props">
            <q-input type="number" v-model="props.row.mark2"></q-input>
          </q-td>
          <q-td key="progress" :props="props">
            <q-input type="number" v-model="props.row.progress"></q-input>
          </q-td>
          <q-td key="quality" :props="props">
            <q-input type="number" v-model="props.row.quality"></q-input>
          </q-td>
          <q-td key="unsuccs" :props="props">
            <q-input type="textarea" v-model="props.row.unsuccs"></q-input>
          </q-td>
          <q-td key="actions" :props="props" auto-width>
            <!--                <q-btn color="blue" label="Update" @click="editItem(props.row)" size=sm no-caps></q-btn>-->
            <q-btn color="red" label="Delete" @click="deleteItem(props.row)" size=sm no-caps></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
  import {defineComponent, ref} from '@vue/composition-api'
  import {createNamespacedHelpers} from 'vuex-composition-helpers';
  import ruleApi from 'src/api/ruleApi';

  const ProgressExamHelper = createNamespacedHelpers('report/progress_exam')

  export default defineComponent({
    name: 'ProgressExamTable',
    setup(props,context) {
      const show_dialog = ref(false)

      const getColumns = ProgressExamHelper.useGetters(['getColumns']).getColumns as unknown as Record < string, unknown>[];
      console.log(getColumns)

      let getRows =  ProgressExamHelper.useGetters(['getRows']).getRows as unknown as Record < string, unknown>[];

      const getEditedItem =  ProgressExamHelper.useGetters(['getEditedItem']).getEditedItem as unknown as Record < string, unknown>;

      const getEditedIndex = ProgressExamHelper.useGetters(['getEditedIndex']).getEditedIndex as unknown as number;

      return {show_dialog, getColumns, getRows, getEditedItem,getEditedIndex,ruleApi}
    },
    methods: {
      addRowHandler() {
        this.$store.commit('report/progress_exam/addRow', {'editedItem':this.getEditedItem,'editedIndex':this.getEditedIndex})
        this.close()
      },
      deleteItem(item: Record<string, unknown>) {
        confirm('Вы уверены что хотите удалить строку') && this.$store.commit('report/progress_exam/deleteItem',item)
      },
      editItem(item: Record<string, unknown>) {
        this.$store.commit('report/progress_exam/editItem',item)
        this.show_dialog = true;
      },
      close () {
        this.show_dialog = false
        setTimeout(() => {this.$store.commit('report/progress_exam/setDefault')}, 300)
      }
    }

  })
</script>

<style scoped>

</style>
