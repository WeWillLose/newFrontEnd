<template>
  <div class="q-pa-sm q-gutter-sm">
    <q-table title="Использование современных образовательных технологий в учебной деятельности и воспитательной работе" :hide-no-data="true" :data="getRows" :columns="getColumns"
             class="bg-transparent no-box-shadow">
      <template v-slot:top-right>
        <div>
        </div>
        <div class="q-pa-sm q-gutter-sm">
          <q-dialog v-model="show_dialog">
            <q-card class="add-row-dialog">
              <q-card-section>
                <div class="text-h6">Добавить строку</div>
              </q-card-section>

              <q-card-section class="">
                <div class="row q-gutter-md q-ma-md">
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
          <q-td key="name" :props="props">
            <q-input type="text" v-model="props.row.name" dense autofocus></q-input>
          </q-td>
          <q-td key="application" :props="props">
            <q-input type="textarea" v-model="props.row.application" dense autofocus></q-input>
          </q-td>
          <q-td key="score" :props="props">
            <q-input type="number" v-model="props.row.score"
                     :rules="[ruleApi.withoutSpaces(),ruleApi.numberBetweenNotStrictScore(0,0.5)]" dense autofocus></q-input>
          </q-td>qu

          <q-td key="actions" :props="props" auto-width>
            <!--                <q-btn color="blue" label="Update" @click="editItem(props.row)" size=sm no-caps></q-btn>-->
            <q-btn color="red" label="Delete"  @click="deleteItem(props.row)" size=sm no-caps></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import {createNamespacedHelpers} from 'vuex-composition-helpers';
import {computed, defineComponent, ref, watch} from "@vue/composition-api";
import ruleApi from 'src/api/ruleApi';

const TechnologiesHelper = createNamespacedHelpers('report/technologies')

export default defineComponent({
  name: 'TechnologiesTable',
  setup(props,context) {
    const getColumns = TechnologiesHelper.useGetters(['getColumns']).getColumns as unknown as Record < string, unknown>[];
    console.log(getColumns)
    const show_dialog = ref(false)

    let getRows =  TechnologiesHelper.useGetters(['getRows']).getRows as unknown as Record < string, unknown>[];
    const getDefaultItem = TechnologiesHelper.useGetters(['getDefaultItem']).getDefaultItem as unknown as Record<string, unknown>;
    const getEditedIndex = TechnologiesHelper.useGetters(['getEditedIndex']).getEditedIndex as unknown as number;
    const getEditedItem = TechnologiesHelper.useGetters(['getEditedItem']).getEditedItem as unknown as Record<string, unknown>;
    const separator = ref("vertical")

    return {getColumns, getRows, getDefaultItem, getEditedIndex, getEditedItem, ruleApi,separator,show_dialog}
  },

  methods: {
    addRowHandler() {
      this.$store.commit('report/technologies/addRow', {'editedItem':this.getEditedItem,'editedIndex':this.getEditedIndex})
      this.close()
    },
    deleteItem(item: Record<string, unknown>) {
      confirm('Вы уверены что хотите удалить строку') && this.$store.commit('report/technologies/deleteItem',item)
    },
    editItem(item: Record<string, unknown>) {
      this.$store.commit('report/technologies/editItem',item)
      this.show_dialog = true;
    },
    close () {
      this.show_dialog = false
      setTimeout(() => {this.$store.commit('report/technologies/setDefault')}, 300)
    }
  }

})
</script>

<style scoped>

</style>
