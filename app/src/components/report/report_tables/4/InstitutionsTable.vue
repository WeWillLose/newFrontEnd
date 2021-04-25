<template>
  <div class="q-pa-sm q-gutter-sm">
    <q-table title="4.3 Использование возможностей культурных, научных, производственных и др. учреждений района, города и т.д. в организации внеурочной работы" :hide-no-data="true" :data="getRows" :columns="getColumns"
             class="bg-transparent no-box-shadow">
      <template v-slot:top-right>
        <div>
          <q-btn dense color="primary" label="Добавить строку" @click="show_dialog = true" no-caps ></q-btn>
        </div>
        <div class="q-pa-sm q-gutter-sm">
          <q-dialog v-model="show_dialog">
            <q-card class="add-row-dialog">
              <q-card-section>
                <div class="text-h6">Добавить строку</div>
              </q-card-section>

              <q-card-section class="">
                <div class="row q-gutter-md q-ma-md">
                  <q-input  type="text" clearable v-model="getEditedItem.institutions" label="Культурные, научные, производственные и др. учреждения, города, других городов"></q-input>
                  <q-input  type="number" clearable v-model="getEditedItem.students" label="Количество студентов"></q-input>
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Добавить" color="accent" v-close-popup @click="addRowHandler" ></q-btn>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>

      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="institutions" :props="props">
            <q-input type="text" v-model="props.row.institutions" dense autofocus></q-input>
          </q-td>
          <q-td key="students" :props="props">
            <q-input type="number" v-model="props.row.students" dense autofocus></q-input>
          </q-td>
          <q-td key="score" :props="props">
            <q-input type="number" v-model="props.row.score"
                     :rules="[ruleApi.withoutSpaces(),ruleApi.numberBetweenNotStrictScore(0,0.5)]" dense autofocus></q-input>
          </q-td>

          <q-td key="actions" :props="props" auto-width>
            <!--                <q-btn color="blue" label="Update" @click="editItem(props.row)" size=sm no-caps></q-btn>-->
            <q-btn color="red" label="Delete"  @click="deleteItem(props.row)" size=sm no-caps></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts" >
import {createNamespacedHelpers} from 'vuex-composition-helpers';
import {computed, defineComponent, ref, watch} from "@vue/composition-api";
import ruleApi from 'src/api/ruleApi';

const InstitutionsHelper = createNamespacedHelpers('report/institutions')

 export default defineComponent({
  name: 'InstitutionsTable',
  setup(props,context) {
    const getColumns = InstitutionsHelper.useGetters(['getColumns']).getColumns as unknown as Record < string, unknown>[];
    console.log(getColumns)
    const show_dialog = ref(false)

    let getRows =  InstitutionsHelper.useGetters(['getRows']).getRows as unknown as Record < string, unknown>[];
    const getDefaultItem = InstitutionsHelper.useGetters(['getDefaultItem']).getDefaultItem as unknown as Record<string, unknown>;
    const getEditedIndex = InstitutionsHelper.useGetters(['getEditedIndex']).getEditedIndex as unknown as number;
    const getEditedItem = InstitutionsHelper.useGetters(['getEditedItem']).getEditedItem as unknown as Record<string, unknown>;
    const separator = ref("vertical")

    return {getColumns, getRows, getDefaultItem, getEditedIndex, getEditedItem, ruleApi,separator,show_dialog}
  },

  methods: {
    addRowHandler() {
      this.$store.commit('report/institutions/addRow', {'editedItem':this.getEditedItem,'editedIndex':this.getEditedIndex})
      this.close()
    },
    deleteItem(item: Record<string, unknown>) {
      confirm('Вы уверены что хотите удалить строку') && this.$store.commit('report/institutions/deleteItem',item)
    },
    editItem(item: Record<string, unknown>) {
      this.$store.commit('report/institutions/editItem',item)
      this.show_dialog = true;
    },
    close () {
      this.show_dialog = false
      setTimeout(() => {this.$store.commit('report/institutions/setDefault')}, 300)
    }
  }

})
</script>

<style scoped>

</style>
